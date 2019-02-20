'use strict';
const AWS = require("aws-sdk");
var docClient = new AWS.DynamoDB.DocumentClient();

module.exports.getAppointments = async (event, context) => {
	var params = {
		TableName : 'appointments'
	  };
	const responseBody = await new Promise((resolve, reject) => {
		docClient.scan(params, function (err, data) {
			if (err) {
				console.log(err, err.stack); // an error occurred
				reject(err);
			} else {
				console.log(data);           // successful response
				resolve(data.Items);
			}
		});
	})
	return {
		statusCode: 200,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": 'GET,POST,OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type'
		},
		body: JSON.stringify({ "message": "Success", body: responseBody })
	};
};

module.exports.addAppointment = async (event, context) => {
	const { name, startsAt, endsAt, venue, description, emails } = JSON.parse(event.body) || {}
	if (!name || !startsAt || !endsAt || !venue || !description || !emails) {
		return {
			statusCode: 400,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": 'GET,POST,OPTIONS',
				'Access-Control-Allow-Headers': 'Content-Type'
			},
			body: JSON.stringify({ "message": "Invalid data" })
		};
	}
	const params = {
		Item: {
			"id": "AP" + Date.now() ,
			name,
			startsAt,
			endsAt,
			venue,
			description,
			emails
		},
		ReturnConsumedCapacity: "TOTAL",
		TableName: "appointments"
	};
	const responseBody = await new Promise((resolve, reject) => {
		docClient.put(params, function (err, data) {
			if (err) {
				console.log(err, err.stack); // an error occurred
				reject(err);
			} else {
				console.log(data);           // successful response
				resolve(data);
			}
		});
	})
	return {
		statusCode: 200,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": 'GET,POST,OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type'
		},
		body: JSON.stringify({ "message": "Success", body: responseBody })
	};
};
