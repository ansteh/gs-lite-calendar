function testGetMeetings() {
  var now = new Date();
  var startTime = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));
  var events = getMeetingsTillNowFrom(startTime);
  Logger.log('Number of events: ' + events.length);
}

function testGetMeetingsTillNowByDayFrom() {
  var now = new Date();
  var startTime = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));
  var days = getMeetingsTillNowByDayFrom(startTime);

  Logger.log('days: ' + days.length);
  days.forEach(function(day){
    Logger.log('day: ' + day.length);
  });
}

function testCountMeetingsFrom() {
  var now = new Date();
  var startTime = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));
  var json = countMeetingsTillNowFrom(startTime);

  Logger.log('json: ' + JSON.stringify(json));

}
