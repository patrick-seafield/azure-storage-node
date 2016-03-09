// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
}

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://xplat.table.core.windows.net/Tables(\'expretry1\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'cced704a-0002-0048-36d5-75a49a000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  dataserviceid: 'https://xplat.table.core.windows.net/Tables(\'expretry1\')',
  date: 'Fri, 04 Mar 2016 05:21:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://xplat.table.core.windows.net/Tables(\'expretry1\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'cced704a-0002-0048-36d5-75a49a000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  dataserviceid: 'https://xplat.table.core.windows.net/Tables(\'expretry1\')',
  date: 'Fri, 04 Mar 2016 05:21:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(409, "<?xml version=\"1.0\" encoding=\"utf-8\"?><error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><code>TableAlreadyExists</code><message xml:lang=\"en-US\">The table specified already exists.\nRequestId:59f3e498-0002-0016-57d5-755799000000\nTime:2016-03-04T05:21:45.7686987Z</message></error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '59f3e498-0002-0016-57d5-755799000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  date: 'Fri, 04 Mar 2016 05:21:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(409, "<?xml version=\"1.0\" encoding=\"utf-8\"?><error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><code>TableAlreadyExists</code><message xml:lang=\"en-US\">The table specified already exists.\nRequestId:59f3e498-0002-0016-57d5-755799000000\nTime:2016-03-04T05:21:45.7686987Z</message></error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '59f3e498-0002-0016-57d5-755799000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  date: 'Fri, 04 Mar 2016 05:21:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:443')
  .get('/Tables(%27expretry1%27)')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\"?><entry xml:base=\"https://xplat.table.core.windows.net/\" xmlns=\"http://www.w3.org/2005/Atom\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns:georss=\"http://www.georss.org/georss\" xmlns:gml=\"http://www.opengis.net/gml\"><id>https://xplat.table.core.windows.net/Tables('expretry1')</id><category term=\"xplat.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" /><link rel=\"edit\" title=\"Tables\" href=\"Tables('expretry1')\" /><title /><updated>2016-03-04T05:21:46Z</updated><author><name /></author><content type=\"application/xml\"><m:properties><d:TableName>expretry1</d:TableName></m:properties></content></entry>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=entry;charset=utf-8',
  vary: 'Origin',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9d6e552e-0002-0039-07d5-75d6a3000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 04 Mar 2016 05:21:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/Tables(%27expretry1%27)')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\"?><entry xml:base=\"https://xplat.table.core.windows.net/\" xmlns=\"http://www.w3.org/2005/Atom\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns:georss=\"http://www.georss.org/georss\" xmlns:gml=\"http://www.opengis.net/gml\"><id>https://xplat.table.core.windows.net/Tables('expretry1')</id><category term=\"xplat.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" /><link rel=\"edit\" title=\"Tables\" href=\"Tables('expretry1')\" /><title /><updated>2016-03-04T05:21:46Z</updated><author><name /></author><content type=\"application/xml\"><m:properties><d:TableName>expretry1</d:TableName></m:properties></content></entry>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=entry;charset=utf-8',
  vary: 'Origin',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9d6e552e-0002-0039-07d5-75d6a3000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 04 Mar 2016 05:21:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:443')
  .delete('/Tables(%27expretry1%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a69a5063-0002-000c-56d5-7578f6000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 04 Mar 2016 05:21:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .delete('/Tables(%27expretry1%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a69a5063-0002-000c-56d5-7578f6000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 04 Mar 2016 05:21:46 GMT',
  connection: 'close' });
 return result; }],
[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://xplat.table.core.windows.net/Tables(\'expretry2\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '205737cf-0002-001b-0bd5-75b895000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  dataserviceid: 'https://xplat.table.core.windows.net/Tables(\'expretry2\')',
  date: 'Fri, 04 Mar 2016 05:21:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://xplat.table.core.windows.net/Tables(\'expretry2\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '205737cf-0002-001b-0bd5-75b895000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  dataserviceid: 'https://xplat.table.core.windows.net/Tables(\'expretry2\')',
  date: 'Fri, 04 Mar 2016 05:21:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:443')
  .delete('/Tables(%27expretry2%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3b4049a1-0002-002a-21d5-75e342000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 04 Mar 2016 05:21:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .delete('/Tables(%27expretry2%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3b4049a1-0002-002a-21d5-75e342000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 04 Mar 2016 05:21:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(409, "<?xml version=\"1.0\" encoding=\"utf-8\"?><error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><code>TableBeingDeleted</code><message xml:lang=\"en-US\">The specified table is being deleted. Try operation later.\nRequestId:bfabf8b0-0002-004d-66d5-7550e5000000\nTime:2016-03-04T05:21:48.6589799Z</message></error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bfabf8b0-0002-004d-66d5-7550e5000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  date: 'Fri, 04 Mar 2016 05:21:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(409, "<?xml version=\"1.0\" encoding=\"utf-8\"?><error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><code>TableBeingDeleted</code><message xml:lang=\"en-US\">The specified table is being deleted. Try operation later.\nRequestId:bfabf8b0-0002-004d-66d5-7550e5000000\nTime:2016-03-04T05:21:48.6589799Z</message></error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bfabf8b0-0002-004d-66d5-7550e5000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  date: 'Fri, 04 Mar 2016 05:21:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(409, "<?xml version=\"1.0\" encoding=\"utf-8\"?><error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><code>TableBeingDeleted</code><message xml:lang=\"en-US\">The specified table is being deleted. Try operation later.\nRequestId:53d44ea0-0002-0024-30d5-750f49000000\nTime:2016-03-04T05:22:19.3684005Z</message></error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '53d44ea0-0002-0024-30d5-750f49000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  date: 'Fri, 04 Mar 2016 05:22:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(409, "<?xml version=\"1.0\" encoding=\"utf-8\"?><error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><code>TableBeingDeleted</code><message xml:lang=\"en-US\">The specified table is being deleted. Try operation later.\nRequestId:53d44ea0-0002-0024-30d5-750f49000000\nTime:2016-03-04T05:22:19.3684005Z</message></error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '53d44ea0-0002-0024-30d5-750f49000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  date: 'Fri, 04 Mar 2016 05:22:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://xplat.table.core.windows.net/Tables(\'expretry2\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '707c938e-0002-000b-68d5-758e73000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  dataserviceid: 'https://xplat.table.core.windows.net/Tables(\'expretry2\')',
  date: 'Fri, 04 Mar 2016 05:22:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://xplat.table.core.windows.net/Tables(\'expretry2\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '707c938e-0002-000b-68d5-758e73000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  dataserviceid: 'https://xplat.table.core.windows.net/Tables(\'expretry2\')',
  date: 'Fri, 04 Mar 2016 05:22:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:443')
  .get('/Tables(%27expretry2%27)')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\"?><entry xml:base=\"https://xplat.table.core.windows.net/\" xmlns=\"http://www.w3.org/2005/Atom\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns:georss=\"http://www.georss.org/georss\" xmlns:gml=\"http://www.opengis.net/gml\"><id>https://xplat.table.core.windows.net/Tables('expretry2')</id><category term=\"xplat.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" /><link rel=\"edit\" title=\"Tables\" href=\"Tables('expretry2')\" /><title /><updated>2016-03-04T05:22:50Z</updated><author><name /></author><content type=\"application/xml\"><m:properties><d:TableName>expretry2</d:TableName></m:properties></content></entry>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=entry;charset=utf-8',
  vary: 'Origin',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bc8f53e2-0002-0042-07d5-75bd13000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 04 Mar 2016 05:22:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/Tables(%27expretry2%27)')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\"?><entry xml:base=\"https://xplat.table.core.windows.net/\" xmlns=\"http://www.w3.org/2005/Atom\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns:georss=\"http://www.georss.org/georss\" xmlns:gml=\"http://www.opengis.net/gml\"><id>https://xplat.table.core.windows.net/Tables('expretry2')</id><category term=\"xplat.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" /><link rel=\"edit\" title=\"Tables\" href=\"Tables('expretry2')\" /><title /><updated>2016-03-04T05:22:50Z</updated><author><name /></author><content type=\"application/xml\"><m:properties><d:TableName>expretry2</d:TableName></m:properties></content></entry>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=entry;charset=utf-8',
  vary: 'Origin',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bc8f53e2-0002-0042-07d5-75bd13000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 04 Mar 2016 05:22:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:443')
  .delete('/Tables(%27expretry2%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '07668516-0002-0001-28d5-7597fa000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 04 Mar 2016 05:22:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .delete('/Tables(%27expretry2%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '07668516-0002-0001-28d5-7597fa000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 04 Mar 2016 05:22:50 GMT',
  connection: 'close' });
 return result; }],
[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:443')
  .delete('/Tables(%27expretry3%27)')
  .reply(404, "<?xml version=\"1.0\" encoding=\"utf-8\"?><error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><code>ResourceNotFound</code><message xml:lang=\"en-US\">The specified resource does not exist.\nRequestId:3c68a6c1-0002-0038-46d5-75d75e000000\nTime:2016-03-04T05:22:51.8445487Z</message></error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3c68a6c1-0002-0038-46d5-75d75e000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 04 Mar 2016 05:22:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .delete('/Tables(%27expretry3%27)')
  .reply(404, "<?xml version=\"1.0\" encoding=\"utf-8\"?><error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><code>ResourceNotFound</code><message xml:lang=\"en-US\">The specified resource does not exist.\nRequestId:3c68a6c1-0002-0038-46d5-75d75e000000\nTime:2016-03-04T05:22:51.8445487Z</message></error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3c68a6c1-0002-0038-46d5-75d75e000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 04 Mar 2016 05:22:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:443')
  .delete('/Tables(%27expretry3%27)')
  .reply(404, "<?xml version=\"1.0\" encoding=\"utf-8\"?><error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><code>ResourceNotFound</code><message xml:lang=\"en-US\">The specified resource does not exist.\nRequestId:df475af9-0002-0033-06d5-75cf2a000000\nTime:2016-03-04T05:22:52.4006998Z</message></error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'df475af9-0002-0033-06d5-75cf2a000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 04 Mar 2016 05:22:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .delete('/Tables(%27expretry3%27)')
  .reply(404, "<?xml version=\"1.0\" encoding=\"utf-8\"?><error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><code>ResourceNotFound</code><message xml:lang=\"en-US\">The specified resource does not exist.\nRequestId:df475af9-0002-0033-06d5-75cf2a000000\nTime:2016-03-04T05:22:52.4006998Z</message></error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'df475af9-0002-0033-06d5-75cf2a000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 04 Mar 2016 05:22:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:443')
  .delete('/Tables(%27expretry3%27)')
  .reply(404, "<?xml version=\"1.0\" encoding=\"utf-8\"?><error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><code>ResourceNotFound</code><message xml:lang=\"en-US\">The specified resource does not exist.\nRequestId:9b7179ac-0002-001a-4ed5-75b968000000\nTime:2016-03-04T05:22:53.0127711Z</message></error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9b7179ac-0002-001a-4ed5-75b968000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 04 Mar 2016 05:22:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .delete('/Tables(%27expretry3%27)')
  .reply(404, "<?xml version=\"1.0\" encoding=\"utf-8\"?><error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><code>ResourceNotFound</code><message xml:lang=\"en-US\">The specified resource does not exist.\nRequestId:9b7179ac-0002-001a-4ed5-75b968000000\nTime:2016-03-04T05:22:53.0127711Z</message></error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9b7179ac-0002-001a-4ed5-75b968000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 04 Mar 2016 05:22:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:443')
  .delete('/Tables(%27expretry3%27)')
  .reply(404, "<?xml version=\"1.0\" encoding=\"utf-8\"?><error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><code>ResourceNotFound</code><message xml:lang=\"en-US\">The specified resource does not exist.\nRequestId:b764d82a-0002-0029-74d5-75e045000000\nTime:2016-03-04T05:22:53.8711137Z</message></error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b764d82a-0002-0029-74d5-75e045000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 04 Mar 2016 05:22:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .delete('/Tables(%27expretry3%27)')
  .reply(404, "<?xml version=\"1.0\" encoding=\"utf-8\"?><error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><code>ResourceNotFound</code><message xml:lang=\"en-US\">The specified resource does not exist.\nRequestId:b764d82a-0002-0029-74d5-75e045000000\nTime:2016-03-04T05:22:53.8711137Z</message></error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b764d82a-0002-0029-74d5-75e045000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 04 Mar 2016 05:22:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:443')
  .get('/Tables(%27expretry3%27)')
  .reply(404, "<?xml version=\"1.0\" encoding=\"utf-8\"?><error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><code>ResourceNotFound</code><message xml:lang=\"en-US\">The specified resource does not exist.\nRequestId:af4265be-0002-000f-60d5-757bf1000000\nTime:2016-03-04T05:22:54.0874650Z</message></error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml;charset=utf-8',
  vary: 'Origin',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'af4265be-0002-000f-60d5-757bf1000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 04 Mar 2016 05:22:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/Tables(%27expretry3%27)')
  .reply(404, "<?xml version=\"1.0\" encoding=\"utf-8\"?><error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\"><code>ResourceNotFound</code><message xml:lang=\"en-US\">The specified resource does not exist.\nRequestId:af4265be-0002-000f-60d5-757bf1000000\nTime:2016-03-04T05:22:54.0874650Z</message></error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml;charset=utf-8',
  vary: 'Origin',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'af4265be-0002-000f-60d5-757bf1000000',
  'x-ms-version': '2015-04-05',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 04 Mar 2016 05:22:53 GMT',
  connection: 'close' });
 return result; }]];