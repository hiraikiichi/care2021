// JavaScript Document

var Events = {
    "monthly": [
        {
            "id": 1,
            "name": "ゼミ",
            "startdate": "2021-12-20",
            "enddate": "",
            "color": "#bdb76b"
        },
        {
            "id": 2,
            "name": "第1回 予稿提出",
            "startdate": "2022-01-06",
            "enddate": "",
            "color": "#008000",
        },
        {
            "id": 3,
            "name": "第2回 予稿提出",
            "startdate": "2022-01-17",
            "enddate": "",
            "color": "#008000",
        },
        {
            "id": 4,
            "name": "第1回 卒論提出",
            "startdate": "2022-01-19",
            "enddate": "",
            "color": "#ffa500",
        },
        {
            "id": 5,
            "name": "発表練習1",
            "startdate": "2022-01-24",
            "enddate": "",
            "color": "#4169e1",
        },
        {
            "id": 6,
            "name": "予稿最終提出",
            "startdate": "2022-01-26",
            "enddate": "",
            "color": "#008000",
        },
        {
            "id": 7,
            "name": "発表練習2",
            "startdate": "2022-01-31",
            "enddate": "",
            "color": "#4169e1",
        },
        {
            "id": 8,
            "name": "休講(入校禁止)",
            "startdate": "2022-01-14",
            "enddate": "2022-01-16",
            "color": "#ee82ee",
        },
        {
            "id": 9,
            "name": "休講(入校禁止)",
            "startdate": "2021-12-28",
            "enddate": "2022-01-04",
            "color": "#ee82ee",
        },
        {
            "id": 10,
            "name": "ゼミ",
            "startdate": "2022-01-06",
            "enddate": "",
            "color": "#bdb76b",
        },
        {
            "id": 11,
            "name": "ゼミ",
            "startdate": "2022-01-17",
            "enddate": "",
            "color": "#bdb76b",
        },
        {
            "id": 12,
            "name": "ゼミ",
            "startdate": "2022-01-24",
            "enddate": "",
            "color": "#bdb76b",
        },
        {
            "id": 13,
            "name": "ゼミ",
            "startdate": "2022-01-31",
            "enddate": "",
            "color": "#bdb76b",
        },
    ]
};

$(window).load(function () {
    $('#mycalendar').monthly({
        mode: 'event',
        dataType: 'json',
        events: Events,
        eventList: false
    });
});
