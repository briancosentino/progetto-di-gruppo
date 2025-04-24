const journeys = [
    {
        "id": 1,
        "destination": "Parigi",
        "begin": "2025-05-01",
        "end": "2025-05-07",
        "people": [
            {
                "name": "Luca",
                "surname": "Neri",
                "phoneNumber": "3821911864",
                "codiceFiscale": "NERLUC75A01H501X",
                "email": "luca.neri@example.com",
                "emergencyContactPhone": "3179975247"
            },
            {
                "name": "Marco",
                "surname": "Grigi",
                "phoneNumber": "3466182339",
                "codiceFiscale": "GRIMAR96A01H501X",
                "email": "marco.grigi@example.com",
                "emergencyContactPhone": "3224352487"
            },
            {
                "name": "Stefano",
                "surname": "Rosa",
                "phoneNumber": "3491813777",
                "codiceFiscale": "ROSSTE79A01H501X",
                "email": "stefano.rosa@example.com",
                "emergencyContactPhone": "3398511301"
            },
            {
                "name": "Giovanni",
                "surname": "Marrone",
                "phoneNumber": "3161187182",
                "codiceFiscale": "MARGIO94A01H501X",
                "email": "giovanni.marrone@example.com",
                "emergencyContactPhone": "3216937931"
            },
            {
                "name": "Chiara",
                "surname": "Gialli",
                "phoneNumber": "3814181286",
                "codiceFiscale": "GIACHI94A01H501X",
                "email": "chiara.gialli@example.com",
                "emergencyContactPhone": "3880786874"
            },
            {
                "name": "Chiara",
                "surname": "Gialli",
                "phoneNumber": "3418047558",
                "codiceFiscale": "GIACHI80A01H501X",
                "email": "chiara.gialli@example.com",
                "emergencyContactPhone": "3195530189"
            },
            {
                "name": "Stefano",
                "surname": "Rosa",
                "phoneNumber": "3562681950",
                "codiceFiscale": "ROSSTE73A01H501X",
                "email": "stefano.rosa@example.com",
                "emergencyContactPhone": "3261383352"
            },
            {
                "name": "Francesca",
                "surname": "Blu",
                "phoneNumber": "3290691956",
                "codiceFiscale": "BLUFRA97A01H501X",
                "email": "francesca.blu@example.com",
                "emergencyContactPhone": "3742146931"
            }
        ]
    },
    {
        "id": 2,
        "destination": "Roma",
        "begin": "2025-05-10",
        "end": "2025-05-15",
        "people": [
            {
                "name": "Elena",
                "surname": "Blu",
                "phoneNumber": "3039339878",
                "codiceFiscale": "BLUELE87A01H501X",
                "email": "elena.blu@example.com",
                "emergencyContactPhone": "3744448134"
            },
            {
                "name": "Andrea",
                "surname": "Blu",
                "phoneNumber": "3705749325",
                "codiceFiscale": "BLUAND89A01H501X",
                "email": "andrea.blu@example.com",
                "emergencyContactPhone": "3670390783"
            },
            {
                "name": "Laura",
                "surname": "Blu",
                "phoneNumber": "3591409578",
                "codiceFiscale": "BLULAU89A01H501X",
                "email": "laura.blu@example.com",
                "emergencyContactPhone": "3652985844"
            },
            {
                "name": "Elena",
                "surname": "Neri",
                "phoneNumber": "3291514837",
                "codiceFiscale": "NERELE72A01H501X",
                "email": "elena.neri@example.com",
                "emergencyContactPhone": "3515855590"
            },
            {
                "name": "Laura",
                "surname": "Blu",
                "phoneNumber": "3312029516",
                "codiceFiscale": "BLULAU96A01H501X",
                "email": "laura.blu@example.com",
                "emergencyContactPhone": "3757139018"
            },
            {
                "name": "Giovanni",
                "surname": "Verdi",
                "phoneNumber": "3399490071",
                "codiceFiscale": "VERGIO93A01H501X",
                "email": "giovanni.verdi@example.com",
                "emergencyContactPhone": "3468842721"
            },
            {
                "name": "Andrea",
                "surname": "Grigi",
                "phoneNumber": "3139877664",
                "codiceFiscale": "GRIAND73A01H501X",
                "email": "andrea.grigi@example.com",
                "emergencyContactPhone": "3238334893"
            },
            {
                "name": "Luca",
                "surname": "Marrone",
                "phoneNumber": "3334215251",
                "codiceFiscale": "MARLUC76A01H501X",
                "email": "luca.marrone@example.com",
                "emergencyContactPhone": "3103516976"
            }
        ]
    },
    {
        "id": 3,
        "destination": "New York",
        "begin": "2025-06-01",
        "end": "2025-06-10",
        "people": [
            {
                "name": "Giovanni",
                "surname": "Bianchi",
                "phoneNumber": "3779840316",
                "codiceFiscale": "BIAGIO73A01H501X",
                "email": "giovanni.bianchi@example.com",
                "emergencyContactPhone": "3897390436"
            },
            {
                "name": "Maria",
                "surname": "Blu",
                "phoneNumber": "3787108283",
                "codiceFiscale": "BLUMAR77A01H501X",
                "email": "maria.blu@example.com",
                "emergencyContactPhone": "3717110660"
            },
            {
                "name": "Maria",
                "surname": "Gialli",
                "phoneNumber": "3312307118",
                "codiceFiscale": "GIAMAR94A01H501X",
                "email": "maria.gialli@example.com",
                "emergencyContactPhone": "3667285409"
            },
            {
                "name": "Elena",
                "surname": "Verdi",
                "phoneNumber": "3622063775",
                "codiceFiscale": "VERELE86A01H501X",
                "email": "elena.verdi@example.com",
                "emergencyContactPhone": "3300417973"
            },
            {
                "name": "Laura",
                "surname": "Bianchi",
                "phoneNumber": "3336763363",
                "codiceFiscale": "BIALAU99A01H501X",
                "email": "laura.bianchi@example.com",
                "emergencyContactPhone": "3478392122"
            },
            {
                "name": "Luca",
                "surname": "Rossi",
                "phoneNumber": "3557010381",
                "codiceFiscale": "ROSLUC90A01H501X",
                "email": "luca.rossi@example.com",
                "emergencyContactPhone": "3205552384"
            },
            {
                "name": "Maria",
                "surname": "Grigi",
                "phoneNumber": "3849532349",
                "codiceFiscale": "GRIMAR89A01H501X",
                "email": "maria.grigi@example.com",
                "emergencyContactPhone": "3085183201"
            },
            {
                "name": "Maria",
                "surname": "Rosa",
                "phoneNumber": "3693689571",
                "codiceFiscale": "ROSMAR83A01H501X",
                "email": "maria.rosa@example.com",
                "emergencyContactPhone": "3436700001"
            }
        ]
    },
    {
        "id": 4,
        "destination": "Tokyo",
        "begin": "2025-07-05",
        "end": "2025-07-20",
        "people": [
            {
                "name": "Giovanni",
                "surname": "Rossi",
                "phoneNumber": "3428667975",
                "codiceFiscale": "ROSGIO86A01H501X",
                "email": "giovanni.rossi@example.com",
                "emergencyContactPhone": "3989061020"
            },
            {
                "name": "Giovanni",
                "surname": "Viola",
                "phoneNumber": "3829142698",
                "codiceFiscale": "VIOGIO71A01H501X",
                "email": "giovanni.viola@example.com",
                "emergencyContactPhone": "3711750073"
            },
            {
                "name": "Marco",
                "surname": "Gialli",
                "phoneNumber": "3012805706",
                "codiceFiscale": "GIAMAR98A01H501X",
                "email": "marco.gialli@example.com",
                "emergencyContactPhone": "3899580556"
            },
            {
                "name": "Giovanni",
                "surname": "Viola",
                "phoneNumber": "3059591891",
                "codiceFiscale": "VIOGIO71A01H501X",
                "email": "giovanni.viola@example.com",
                "emergencyContactPhone": "3572810806"
            },
            {
                "name": "Andrea",
                "surname": "Rosa",
                "phoneNumber": "3284738664",
                "codiceFiscale": "ROSAND82A01H501X",
                "email": "andrea.rosa@example.com",
                "emergencyContactPhone": "3311577637"
            },
            {
                "name": "Maria",
                "surname": "Marrone",
                "phoneNumber": "3740021776",
                "codiceFiscale": "MARMAR92A01H501X",
                "email": "maria.marrone@example.com",
                "emergencyContactPhone": "3132457960"
            },
            {
                "name": "Luca",
                "surname": "Neri",
                "phoneNumber": "3567056550",
                "codiceFiscale": "NERLUC73A01H501X",
                "email": "luca.neri@example.com",
                "emergencyContactPhone": "3578857560"
            },
            {
                "name": "Francesca",
                "surname": "Marrone",
                "phoneNumber": "3083879306",
                "codiceFiscale": "MARFRA91A01H501X",
                "email": "francesca.marrone@example.com",
                "emergencyContactPhone": "3222642927"
            }
        ]
    },
    {
        "id": 5,
        "destination": "Barcellona",
        "begin": "2025-05-20",
        "end": "2025-05-27",
        "people": [
            {
                "name": "Chiara",
                "surname": "Blu",
                "phoneNumber": "3802270280",
                "codiceFiscale": "BLUCHI85A01H501X",
                "email": "chiara.blu@example.com",
                "emergencyContactPhone": "3145289197"
            },
            {
                "name": "Luca",
                "surname": "Gialli",
                "phoneNumber": "3184666985",
                "codiceFiscale": "GIALUC92A01H501X",
                "email": "luca.gialli@example.com",
                "emergencyContactPhone": "3703699056"
            },
            {
                "name": "Stefano",
                "surname": "Blu",
                "phoneNumber": "3826752177",
                "codiceFiscale": "BLUSTE72A01H501X",
                "email": "stefano.blu@example.com",
                "emergencyContactPhone": "3667574575"
            },
            {
                "name": "Chiara",
                "surname": "Blu",
                "phoneNumber": "3018690390",
                "codiceFiscale": "BLUCHI81A01H501X",
                "email": "chiara.blu@example.com",
                "emergencyContactPhone": "3348993330"
            },
            {
                "name": "Laura",
                "surname": "Verdi",
                "phoneNumber": "3963075847",
                "codiceFiscale": "VERLAU85A01H501X",
                "email": "laura.verdi@example.com",
                "emergencyContactPhone": "3714651768"
            },
            {
                "name": "Elena",
                "surname": "Bianchi",
                "phoneNumber": "3545190588",
                "codiceFiscale": "BIAELE86A01H501X",
                "email": "elena.bianchi@example.com",
                "emergencyContactPhone": "3007513726"
            },
            {
                "name": "Elena",
                "surname": "Verdi",
                "phoneNumber": "3392388291",
                "codiceFiscale": "VERELE74A01H501X",
                "email": "elena.verdi@example.com",
                "emergencyContactPhone": "3641168936"
            },
            {
                "name": "Francesca",
                "surname": "Rossi",
                "phoneNumber": "3700083849",
                "codiceFiscale": "ROSFRA80A01H501X",
                "email": "francesca.rossi@example.com",
                "emergencyContactPhone": "3411246369"
            }
        ]
    },
    {
        "id": 6,
        "destination": "Berlino",
        "begin": "2025-06-15",
        "end": "2025-06-22",
        "people": [
            {
                "name": "Laura",
                "surname": "Bianchi",
                "phoneNumber": "3382431107",
                "codiceFiscale": "BIALAU96A01H501X",
                "email": "laura.bianchi@example.com",
                "emergencyContactPhone": "3786254289"
            },
            {
                "name": "Maria",
                "surname": "Blu",
                "phoneNumber": "3284391428",
                "codiceFiscale": "BLUMAR71A01H501X",
                "email": "maria.blu@example.com",
                "emergencyContactPhone": "3628436602"
            },
            {
                "name": "Chiara",
                "surname": "Blu",
                "phoneNumber": "3210475040",
                "codiceFiscale": "BLUCHI78A01H501X",
                "email": "chiara.blu@example.com",
                "emergencyContactPhone": "3629649724"
            },
            {
                "name": "Stefano",
                "surname": "Verdi",
                "phoneNumber": "3316247705",
                "codiceFiscale": "VERSTE76A01H501X",
                "email": "stefano.verdi@example.com",
                "emergencyContactPhone": "3792954121"
            },
            {
                "name": "Marco",
                "surname": "Gialli",
                "phoneNumber": "3479992192",
                "codiceFiscale": "GIAMAR84A01H501X",
                "email": "marco.gialli@example.com",
                "emergencyContactPhone": "3131563185"
            },
            {
                "name": "Giovanni",
                "surname": "Gialli",
                "phoneNumber": "3229856932",
                "codiceFiscale": "GIAGIO83A01H501X",
                "email": "giovanni.gialli@example.com",
                "emergencyContactPhone": "3008547403"
            },
            {
                "name": "Maria",
                "surname": "Grigi",
                "phoneNumber": "3851632524",
                "codiceFiscale": "GRIMAR82A01H501X",
                "email": "maria.grigi@example.com",
                "emergencyContactPhone": "3818513876"
            },
            {
                "name": "Chiara",
                "surname": "Blu",
                "phoneNumber": "3508534278",
                "codiceFiscale": "BLUCHI84A01H501X",
                "email": "chiara.blu@example.com",
                "emergencyContactPhone": "3605826877"
            }
        ]
    },
    {
        "id": 7,
        "destination": "Londra",
        "begin": "2025-07-10",
        "end": "2025-07-17",
        "people": [
            {
                "name": "Luca",
                "surname": "Viola",
                "phoneNumber": "3640700324",
                "codiceFiscale": "VIOLUC74A01H501X",
                "email": "luca.viola@example.com",
                "emergencyContactPhone": "3857653732"
            },
            {
                "name": "Maria",
                "surname": "Grigi",
                "phoneNumber": "3771655002",
                "codiceFiscale": "GRIMAR84A01H501X",
                "email": "maria.grigi@example.com",
                "emergencyContactPhone": "3088459548"
            },
            {
                "name": "Stefano",
                "surname": "Rossi",
                "phoneNumber": "3038815665",
                "codiceFiscale": "ROSSTE70A01H501X",
                "email": "stefano.rossi@example.com",
                "emergencyContactPhone": "3505022995"
            },
            {
                "name": "Elena",
                "surname": "Blu",
                "phoneNumber": "3473358433",
                "codiceFiscale": "BLUELE85A01H501X",
                "email": "elena.blu@example.com",
                "emergencyContactPhone": "3657575403"
            },
            {
                "name": "Francesca",
                "surname": "Viola",
                "phoneNumber": "3774138166",
                "codiceFiscale": "VIOFRA85A01H501X",
                "email": "francesca.viola@example.com",
                "emergencyContactPhone": "3257090818"
            },
            {
                "name": "Andrea",
                "surname": "Blu",
                "phoneNumber": "3250147415",
                "codiceFiscale": "BLUAND90A01H501X",
                "email": "andrea.blu@example.com",
                "emergencyContactPhone": "3999387561"
            },
            {
                "name": "Maria",
                "surname": "Gialli",
                "phoneNumber": "3302726730",
                "codiceFiscale": "GIAMAR95A01H501X",
                "email": "maria.gialli@example.com",
                "emergencyContactPhone": "3299225842"
            },
            {
                "name": "Maria",
                "surname": "Rosa",
                "phoneNumber": "3346149533",
                "codiceFiscale": "ROSMAR93A01H501X",
                "email": "maria.rosa@example.com",
                "emergencyContactPhone": "3199362002"
            }
        ]
    },
    {
        "id": 8,
        "destination": "Amsterdam",
        "begin": "2025-08-01",
        "end": "2025-08-08",
        "people": [
            {
                "name": "Stefano",
                "surname": "Neri",
                "phoneNumber": "3659053816",
                "codiceFiscale": "NERSTE73A01H501X",
                "email": "stefano.neri@example.com",
                "emergencyContactPhone": "3773925810"
            },
            {
                "name": "Marco",
                "surname": "Rosa",
                "phoneNumber": "3410980514",
                "codiceFiscale": "ROSMAR93A01H501X",
                "email": "marco.rosa@example.com",
                "emergencyContactPhone": "3700459086"
            },
            {
                "name": "Stefano",
                "surname": "Verdi",
                "phoneNumber": "3085920896",
                "codiceFiscale": "VERSTE88A01H501X",
                "email": "stefano.verdi@example.com",
                "emergencyContactPhone": "3346187160"
            },
            {
                "name": "Chiara",
                "surname": "Blu",
                "phoneNumber": "3830956314",
                "codiceFiscale": "BLUCHI95A01H501X",
                "email": "chiara.blu@example.com",
                "emergencyContactPhone": "3741423451"
            },
            {
                "name": "Maria",
                "surname": "Grigi",
                "phoneNumber": "3888861079",
                "codiceFiscale": "GRIMAR86A01H501X",
                "email": "maria.grigi@example.com",
                "emergencyContactPhone": "3708857274"
            },
            {
                "name": "Laura",
                "surname": "Neri",
                "phoneNumber": "3154434170",
                "codiceFiscale": "NERLAU76A01H501X",
                "email": "laura.neri@example.com",
                "emergencyContactPhone": "3954710330"
            },
            {
                "name": "Luca",
                "surname": "Rossi",
                "phoneNumber": "3854710672",
                "codiceFiscale": "ROSLUC83A01H501X",
                "email": "luca.rossi@example.com",
                "emergencyContactPhone": "3382167543"
            },
            {
                "name": "Elena",
                "surname": "Blu",
                "phoneNumber": "3494581881",
                "codiceFiscale": "BLUELE84A01H501X",
                "email": "elena.blu@example.com",
                "emergencyContactPhone": "3584974538"
            }
        ]
    },
    {
        "id": 9,
        "destination": "Lisboa",
        "begin": "2025-09-01",
        "end": "2025-09-07",
        "people": [
            {
                "name": "Stefano",
                "surname": "Verdi",
                "phoneNumber": "3052359701",
                "codiceFiscale": "VERSTE82A01H501X",
                "email": "stefano.verdi@example.com",
                "emergencyContactPhone": "3663666693"
            },
            {
                "name": "Chiara",
                "surname": "Bianchi",
                "phoneNumber": "3027924030",
                "codiceFiscale": "BIACHI87A01H501X",
                "email": "chiara.bianchi@example.com",
                "emergencyContactPhone": "3868585732"
            },
            {
                "name": "Giovanni",
                "surname": "Marrone",
                "phoneNumber": "3927767363",
                "codiceFiscale": "MARGIO81A01H501X",
                "email": "giovanni.marrone@example.com",
                "emergencyContactPhone": "3057602429"
            },
            {
                "name": "Marco",
                "surname": "Viola",
                "phoneNumber": "3977906658",
                "codiceFiscale": "VIOMAR80A01H501X",
                "email": "marco.viola@example.com",
                "emergencyContactPhone": "3001147465"
            },
            {
                "name": "Luca",
                "surname": "Bianchi",
                "phoneNumber": "3212800619",
                "codiceFiscale": "BIALUC79A01H501X",
                "email": "luca.bianchi@example.com",
                "emergencyContactPhone": "3550297220"
            },
            {
                "name": "Giovanni",
                "surname": "Marrone",
                "phoneNumber": "3908541754",
                "codiceFiscale": "MARGIO99A01H501X",
                "email": "giovanni.marrone@example.com",
                "emergencyContactPhone": "3873151391"
            },
            {
                "name": "Maria",
                "surname": "Neri",
                "phoneNumber": "3177861168",
                "codiceFiscale": "NERMAR72A01H501X",
                "email": "maria.neri@example.com",
                "emergencyContactPhone": "3900148731"
            },
            {
                "name": "Laura",
                "surname": "Grigi",
                "phoneNumber": "3000415384",
                "codiceFiscale": "GRILAU93A01H501X",
                "email": "laura.grigi@example.com",
                "emergencyContactPhone": "3496575953"
            }
        ]
    },
    {
        "id": 10,
        "destination": "Bangkok",
        "begin": "2025-09-15",
        "end": "2025-09-25",
        "people": [
            {
                "name": "Marco",
                "surname": "Verdi",
                "phoneNumber": "3791117390",
                "codiceFiscale": "VERMAR73A01H501X",
                "email": "marco.verdi@example.com",
                "emergencyContactPhone": "3690682079"
            },
            {
                "name": "Stefano",
                "surname": "Verdi",
                "phoneNumber": "3908421125",
                "codiceFiscale": "VERSTE81A01H501X",
                "email": "stefano.verdi@example.com",
                "emergencyContactPhone": "3614858556"
            },
            {
                "name": "Maria",
                "surname": "Gialli",
                "phoneNumber": "3225008239",
                "codiceFiscale": "GIAMAR85A01H501X",
                "email": "maria.gialli@example.com",
                "emergencyContactPhone": "3145071305"
            },
            {
                "name": "Laura",
                "surname": "Verdi",
                "phoneNumber": "3318392545",
                "codiceFiscale": "VERLAU88A01H501X",
                "email": "laura.verdi@example.com",
                "emergencyContactPhone": "3821364103"
            },
            {
                "name": "Laura",
                "surname": "Rosa",
                "phoneNumber": "3150391424",
                "codiceFiscale": "ROSLAU99A01H501X",
                "email": "laura.rosa@example.com",
                "emergencyContactPhone": "3100009391"
            },
            {
                "name": "Stefano",
                "surname": "Rossi",
                "phoneNumber": "3497959361",
                "codiceFiscale": "ROSSTE73A01H501X",
                "email": "stefano.rossi@example.com",
                "emergencyContactPhone": "3931279359"
            },
            {
                "name": "Chiara",
                "surname": "Rossi",
                "phoneNumber": "3649103149",
                "codiceFiscale": "ROSCHI97A01H501X",
                "email": "chiara.rossi@example.com",
                "emergencyContactPhone": "3649145812"
            },
            {
                "name": "Luca",
                "surname": "Gialli",
                "phoneNumber": "3651131991",
                "codiceFiscale": "GIALUC92A01H501X",
                "email": "luca.gialli@example.com",
                "emergencyContactPhone": "3630324185"
            }
        ]
    },
    {
        "id": 11,
        "destination": "Mosca",
        "begin": "2025-06-01",
        "end": "2025-06-10",
        "people": [
            {
                "name": "Francesca",
                "surname": "Grigi",
                "phoneNumber": "3570143561",
                "codiceFiscale": "GRIFRA92A01H501X",
                "email": "francesca.grigi@example.com",
                "emergencyContactPhone": "3930088805"
            },
            {
                "name": "Marco",
                "surname": "Marrone",
                "phoneNumber": "3974588030",
                "codiceFiscale": "MARMAR95A01H501X",
                "email": "marco.marrone@example.com",
                "emergencyContactPhone": "3784600030"
            },
            {
                "name": "Andrea",
                "surname": "Gialli",
                "phoneNumber": "3815190705",
                "codiceFiscale": "GIAAND94A01H501X",
                "email": "andrea.gialli@example.com",
                "emergencyContactPhone": "3185318451"
            },
            {
                "name": "Laura",
                "surname": "Grigi",
                "phoneNumber": "3960040385",
                "codiceFiscale": "GRILAU87A01H501X",
                "email": "laura.grigi@example.com",
                "emergencyContactPhone": "3642154299"
            },
            {
                "name": "Chiara",
                "surname": "Blu",
                "phoneNumber": "3861493259",
                "codiceFiscale": "BLUCHI91A01H501X",
                "email": "chiara.blu@example.com",
                "emergencyContactPhone": "3112687485"
            },
            {
                "name": "Chiara",
                "surname": "Rossi",
                "phoneNumber": "3888564126",
                "codiceFiscale": "ROSCHI92A01H501X",
                "email": "chiara.rossi@example.com",
                "emergencyContactPhone": "3304443159"
            },
            {
                "name": "Elena",
                "surname": "Neri",
                "phoneNumber": "3147010541",
                "codiceFiscale": "NERELE73A01H501X",
                "email": "elena.neri@example.com",
                "emergencyContactPhone": "3842627532"
            },
            {
                "name": "Stefano",
                "surname": "Neri",
                "phoneNumber": "3972346763",
                "codiceFiscale": "NERSTE74A01H501X",
                "email": "stefano.neri@example.com",
                "emergencyContactPhone": "3281333913"
            }
        ]
    },
    {
        "id": 12,
        "destination": "Atene",
        "begin": "2025-07-01",
        "end": "2025-07-08",
        "people": [
            {
                "name": "Chiara",
                "surname": "Neri",
                "phoneNumber": "3531981291",
                "codiceFiscale": "NERCHI90A01H501X",
                "email": "chiara.neri@example.com",
                "emergencyContactPhone": "3977902828"
            },
            {
                "name": "Giovanni",
                "surname": "Rossi",
                "phoneNumber": "3471948921",
                "codiceFiscale": "ROSGIO75A01H501X",
                "email": "giovanni.rossi@example.com",
                "emergencyContactPhone": "3480160786"
            },
            {
                "name": "Maria",
                "surname": "Bianchi",
                "phoneNumber": "3547553116",
                "codiceFiscale": "BIAMAR99A01H501X",
                "email": "maria.bianchi@example.com",
                "emergencyContactPhone": "3072117732"
            },
            {
                "name": "Marco",
                "surname": "Blu",
                "phoneNumber": "3996284958",
                "codiceFiscale": "BLUMAR95A01H501X",
                "email": "marco.blu@example.com",
                "emergencyContactPhone": "3535969177"
            },
            {
                "name": "Marco",
                "surname": "Rosa",
                "phoneNumber": "3534640271",
                "codiceFiscale": "ROSMAR93A01H501X",
                "email": "marco.rosa@example.com",
                "emergencyContactPhone": "3203320164"
            },
            {
                "name": "Chiara",
                "surname": "Verdi",
                "phoneNumber": "3923942708",
                "codiceFiscale": "VERCHI97A01H501X",
                "email": "chiara.verdi@example.com",
                "emergencyContactPhone": "3167189429"
            },
            {
                "name": "Marco",
                "surname": "Verdi",
                "phoneNumber": "3217353912",
                "codiceFiscale": "VERMAR79A01H501X",
                "email": "marco.verdi@example.com",
                "emergencyContactPhone": "3439188406"
            },
            {
                "name": "Elena",
                "surname": "Rossi",
                "phoneNumber": "3575618576",
                "codiceFiscale": "ROSELE88A01H501X",
                "email": "elena.rossi@example.com",
                "emergencyContactPhone": "3354397296"
            }
        ]
    },
    {
        "id": 13,
        "destination": "Vienna",
        "begin": "2025-05-25",
        "end": "2025-06-02",
        "people": [
            {
                "name": "Andrea",
                "surname": "Verdi",
                "phoneNumber": "3783804009",
                "codiceFiscale": "VERAND72A01H501X",
                "email": "andrea.verdi@example.com",
                "emergencyContactPhone": "3392105420"
            },
            {
                "name": "Luca",
                "surname": "Viola",
                "phoneNumber": "3246544314",
                "codiceFiscale": "VIOLUC81A01H501X",
                "email": "luca.viola@example.com",
                "emergencyContactPhone": "3119585998"
            },
            {
                "name": "Andrea",
                "surname": "Viola",
                "phoneNumber": "3801977696",
                "codiceFiscale": "VIOAND70A01H501X",
                "email": "andrea.viola@example.com",
                "emergencyContactPhone": "3548407050"
            },
            {
                "name": "Francesca",
                "surname": "Marrone",
                "phoneNumber": "3810939960",
                "codiceFiscale": "MARFRA95A01H501X",
                "email": "francesca.marrone@example.com",
                "emergencyContactPhone": "3450467647"
            },
            {
                "name": "Maria",
                "surname": "Neri",
                "phoneNumber": "3750821081",
                "codiceFiscale": "NERMAR83A01H501X",
                "email": "maria.neri@example.com",
                "emergencyContactPhone": "3327223365"
            },
            {
                "name": "Andrea",
                "surname": "Bianchi",
                "phoneNumber": "3914205699",
                "codiceFiscale": "BIAAND89A01H501X",
                "email": "andrea.bianchi@example.com",
                "emergencyContactPhone": "3743836611"
            },
            {
                "name": "Francesca",
                "surname": "Rosa",
                "phoneNumber": "3540705343",
                "codiceFiscale": "ROSFRA90A01H501X",
                "email": "francesca.rosa@example.com",
                "emergencyContactPhone": "3339408129"
            },
            {
                "name": "Stefano",
                "surname": "Rosa",
                "phoneNumber": "3178871412",
                "codiceFiscale": "ROSSTE87A01H501X",
                "email": "stefano.rosa@example.com",
                "emergencyContactPhone": "3902932320"
            }
        ]
    },
    {
        "id": 14,
        "destination": "Praga",
        "begin": "2025-06-10",
        "end": "2025-06-17",
        "people": [
            {
                "name": "Laura",
                "surname": "Verdi",
                "phoneNumber": "3850863573",
                "codiceFiscale": "VERLAU87A01H501X",
                "email": "laura.verdi@example.com",
                "emergencyContactPhone": "3996130020"
            },
            {
                "name": "Laura",
                "surname": "Marrone",
                "phoneNumber": "3386056295",
                "codiceFiscale": "MARLAU95A01H501X",
                "email": "laura.marrone@example.com",
                "emergencyContactPhone": "3847506609"
            },
            {
                "name": "Andrea",
                "surname": "Neri",
                "phoneNumber": "3720734565",
                "codiceFiscale": "NERAND98A01H501X",
                "email": "andrea.neri@example.com",
                "emergencyContactPhone": "3120528969"
            },
            {
                "name": "Andrea",
                "surname": "Verdi",
                "phoneNumber": "3095239933",
                "codiceFiscale": "VERAND86A01H501X",
                "email": "andrea.verdi@example.com",
                "emergencyContactPhone": "3213244183"
            },
            {
                "name": "Chiara",
                "surname": "Verdi",
                "phoneNumber": "3342618291",
                "codiceFiscale": "VERCHI97A01H501X",
                "email": "chiara.verdi@example.com",
                "emergencyContactPhone": "3511268814"
            },
            {
                "name": "Marco",
                "surname": "Marrone",
                "phoneNumber": "3458136895",
                "codiceFiscale": "MARMAR89A01H501X",
                "email": "marco.marrone@example.com",
                "emergencyContactPhone": "3956036521"
            },
            {
                "name": "Marco",
                "surname": "Gialli",
                "phoneNumber": "3458255902",
                "codiceFiscale": "GIAMAR79A01H501X",
                "email": "marco.gialli@example.com",
                "emergencyContactPhone": "3790723086"
            },
            {
                "name": "Elena",
                "surname": "Gialli",
                "phoneNumber": "3267061139",
                "codiceFiscale": "GIAELE93A01H501X",
                "email": "elena.gialli@example.com",
                "emergencyContactPhone": "3509724076"
            }
        ]
    },
    {
        "id": 15,
        "destination": "Reykjavik",
        "begin": "2025-08-05",
        "end": "2025-08-12",
        "people": [
            {
                "name": "Chiara",
                "surname": "Rosa",
                "phoneNumber": "3044712270",
                "codiceFiscale": "ROSCHI75A01H501X",
                "email": "chiara.rosa@example.com",
                "emergencyContactPhone": "3114308497"
            },
            {
                "name": "Luca",
                "surname": "Bianchi",
                "phoneNumber": "3279856479",
                "codiceFiscale": "BIALUC88A01H501X",
                "email": "luca.bianchi@example.com",
                "emergencyContactPhone": "3594902305"
            },
            {
                "name": "Chiara",
                "surname": "Gialli",
                "phoneNumber": "3152397217",
                "codiceFiscale": "GIACHI85A01H501X",
                "email": "chiara.gialli@example.com",
                "emergencyContactPhone": "3463261946"
            },
            {
                "name": "Laura",
                "surname": "Grigi",
                "phoneNumber": "3260503644",
                "codiceFiscale": "GRILAU80A01H501X",
                "email": "laura.grigi@example.com",
                "emergencyContactPhone": "3315786767"
            },
            {
                "name": "Francesca",
                "surname": "Rossi",
                "phoneNumber": "3303333897",
                "codiceFiscale": "ROSFRA98A01H501X",
                "email": "francesca.rossi@example.com",
                "emergencyContactPhone": "3548057162"
            },
            {
                "name": "Chiara",
                "surname": "Rossi",
                "phoneNumber": "3419739038",
                "codiceFiscale": "ROSCHI75A01H501X",
                "email": "chiara.rossi@example.com",
                "emergencyContactPhone": "3643780391"
            },
            {
                "name": "Chiara",
                "surname": "Grigi",
                "phoneNumber": "3399453693",
                "codiceFiscale": "GRICHI83A01H501X",
                "email": "chiara.grigi@example.com",
                "emergencyContactPhone": "3832019518"
            },
            {
                "name": "Chiara",
                "surname": "Grigi",
                "phoneNumber": "3023528413",
                "codiceFiscale": "GRICHI80A01H501X",
                "email": "chiara.grigi@example.com",
                "emergencyContactPhone": "3704393904"
            }
        ]
    },
    {
        "id": 16,
        "destination": "Helsinki",
        "begin": "2025-09-10",
        "end": "2025-09-17",
        "people": [
            {
                "name": "Stefano",
                "surname": "Bianchi",
                "phoneNumber": "3797150015",
                "codiceFiscale": "BIASTE96A01H501X",
                "email": "stefano.bianchi@example.com",
                "emergencyContactPhone": "3206731270"
            },
            {
                "name": "Elena",
                "surname": "Verdi",
                "phoneNumber": "3619145851",
                "codiceFiscale": "VERELE84A01H501X",
                "email": "elena.verdi@example.com",
                "emergencyContactPhone": "3448811889"
            },
            {
                "name": "Stefano",
                "surname": "Rosa",
                "phoneNumber": "3781776404",
                "codiceFiscale": "ROSSTE70A01H501X",
                "email": "stefano.rosa@example.com",
                "emergencyContactPhone": "3570561796"
            },
            {
                "name": "Luca",
                "surname": "Gialli",
                "phoneNumber": "3837113277",
                "codiceFiscale": "GIALUC79A01H501X",
                "email": "luca.gialli@example.com",
                "emergencyContactPhone": "3655060350"
            },
            {
                "name": "Laura",
                "surname": "Viola",
                "phoneNumber": "3365710129",
                "codiceFiscale": "VIOLAU83A01H501X",
                "email": "laura.viola@example.com",
                "emergencyContactPhone": "3758210852"
            },
            {
                "name": "Chiara",
                "surname": "Neri",
                "phoneNumber": "3162408532",
                "codiceFiscale": "NERCHI78A01H501X",
                "email": "chiara.neri@example.com",
                "emergencyContactPhone": "3432030063"
            },
            {
                "name": "Laura",
                "surname": "Bianchi",
                "phoneNumber": "3925049705",
                "codiceFiscale": "BIALAU72A01H501X",
                "email": "laura.bianchi@example.com",
                "emergencyContactPhone": "3483069626"
            },
            {
                "name": "Elena",
                "surname": "Rossi",
                "phoneNumber": "3142739409",
                "codiceFiscale": "ROSELE72A01H501X",
                "email": "elena.rossi@example.com",
                "emergencyContactPhone": "3454399105"
            }
        ]
    },
    {
        "id": 17,
        "destination": "Dubai",
        "begin": "2025-10-01",
        "end": "2025-10-08",
        "people": [
            {
                "name": "Stefano",
                "surname": "Blu",
                "phoneNumber": "3105135097",
                "codiceFiscale": "BLUSTE72A01H501X",
                "email": "stefano.blu@example.com",
                "emergencyContactPhone": "3154055903"
            },
            {
                "name": "Francesca",
                "surname": "Grigi",
                "phoneNumber": "3320529816",
                "codiceFiscale": "GRIFRA79A01H501X",
                "email": "francesca.grigi@example.com",
                "emergencyContactPhone": "3373340128"
            },
            {
                "name": "Stefano",
                "surname": "Neri",
                "phoneNumber": "3409364841",
                "codiceFiscale": "NERSTE99A01H501X",
                "email": "stefano.neri@example.com",
                "emergencyContactPhone": "3312460723"
            },
            {
                "name": "Giovanni",
                "surname": "Marrone",
                "phoneNumber": "3249340087",
                "codiceFiscale": "MARGIO82A01H501X",
                "email": "giovanni.marrone@example.com",
                "emergencyContactPhone": "3324098444"
            },
            {
                "name": "Maria",
                "surname": "Neri",
                "phoneNumber": "3022645866",
                "codiceFiscale": "NERMAR82A01H501X",
                "email": "maria.neri@example.com",
                "emergencyContactPhone": "3468705194"
            },
            {
                "name": "Maria",
                "surname": "Rosa",
                "phoneNumber": "3615630942",
                "codiceFiscale": "ROSMAR79A01H501X",
                "email": "maria.rosa@example.com",
                "emergencyContactPhone": "3094972624"
            },
            {
                "name": "Maria",
                "surname": "Rossi",
                "phoneNumber": "3542107028",
                "codiceFiscale": "ROSMAR80A01H501X",
                "email": "maria.rossi@example.com",
                "emergencyContactPhone": "3030207460"
            },
            {
                "name": "Luca",
                "surname": "Rosa",
                "phoneNumber": "3074934871",
                "codiceFiscale": "ROSLUC72A01H501X",
                "email": "luca.rosa@example.com",
                "emergencyContactPhone": "3716556320"
            }
        ]
    },
    {
        "id": 18,
        "destination": "Seoul",
        "begin": "2025-11-01",
        "end": "2025-11-10",
        "people": [
            {
                "name": "Laura",
                "surname": "Rossi",
                "phoneNumber": "3185072714",
                "codiceFiscale": "ROSLAU90A01H501X",
                "email": "laura.rossi@example.com",
                "emergencyContactPhone": "3932448297"
            },
            {
                "name": "Stefano",
                "surname": "Viola",
                "phoneNumber": "3978742607",
                "codiceFiscale": "VIOSTE74A01H501X",
                "email": "stefano.viola@example.com",
                "emergencyContactPhone": "3124705423"
            },
            {
                "name": "Laura",
                "surname": "Marrone",
                "phoneNumber": "3239183824",
                "codiceFiscale": "MARLAU99A01H501X",
                "email": "laura.marrone@example.com",
                "emergencyContactPhone": "3105529313"
            },
            {
                "name": "Francesca",
                "surname": "Neri",
                "phoneNumber": "3105553015",
                "codiceFiscale": "NERFRA85A01H501X",
                "email": "francesca.neri@example.com",
                "emergencyContactPhone": "3721997245"
            },
            {
                "name": "Chiara",
                "surname": "Rossi",
                "phoneNumber": "3690867884",
                "codiceFiscale": "ROSCHI78A01H501X",
                "email": "chiara.rossi@example.com",
                "emergencyContactPhone": "3498101126"
            },
            {
                "name": "Laura",
                "surname": "Blu",
                "phoneNumber": "3567215754",
                "codiceFiscale": "BLULAU98A01H501X",
                "email": "laura.blu@example.com",
                "emergencyContactPhone": "3498496445"
            },
            {
                "name": "Maria",
                "surname": "Rosa",
                "phoneNumber": "3065435276",
                "codiceFiscale": "ROSMAR70A01H501X",
                "email": "maria.rosa@example.com",
                "emergencyContactPhone": "3007161548"
            },
            {
                "name": "Andrea",
                "surname": "Gialli",
                "phoneNumber": "3385368030",
                "codiceFiscale": "GIAAND94A01H501X",
                "email": "andrea.gialli@example.com",
                "emergencyContactPhone": "3561064427"
            }
        ]
    },
    {
        "id": 19,
        "destination": "Sydney",
        "begin": "2025-12-01",
        "end": "2025-12-15",
        "people": [
            {
                "name": "Chiara",
                "surname": "Bianchi",
                "phoneNumber": "3985741742",
                "codiceFiscale": "BIACHI78A01H501X",
                "email": "chiara.bianchi@example.com",
                "emergencyContactPhone": "3531716867"
            },
            {
                "name": "Francesca",
                "surname": "Neri",
                "phoneNumber": "3834323129",
                "codiceFiscale": "NERFRA85A01H501X",
                "email": "francesca.neri@example.com",
                "emergencyContactPhone": "3611666893"
            },
            {
                "name": "Marco",
                "surname": "Gialli",
                "phoneNumber": "3687249809",
                "codiceFiscale": "GIAMAR75A01H501X",
                "email": "marco.gialli@example.com",
                "emergencyContactPhone": "3841698768"
            },
            {
                "name": "Francesca",
                "surname": "Neri",
                "phoneNumber": "3023212074",
                "codiceFiscale": "NERFRA92A01H501X",
                "email": "francesca.neri@example.com",
                "emergencyContactPhone": "3524012510"
            },
            {
                "name": "Marco",
                "surname": "Marrone",
                "phoneNumber": "3496913219",
                "codiceFiscale": "MARMAR83A01H501X",
                "email": "marco.marrone@example.com",
                "emergencyContactPhone": "3054778651"
            },
            {
                "name": "Marco",
                "surname": "Blu",
                "phoneNumber": "3165691519",
                "codiceFiscale": "BLUMAR94A01H501X",
                "email": "marco.blu@example.com",
                "emergencyContactPhone": "3708209767"
            },
            {
                "name": "Chiara",
                "surname": "Neri",
                "phoneNumber": "3030103623",
                "codiceFiscale": "NERCHI85A01H501X",
                "email": "chiara.neri@example.com",
                "emergencyContactPhone": "3727746064"
            },
            {
                "name": "Stefano",
                "surname": "Rossi",
                "phoneNumber": "3790936435",
                "codiceFiscale": "ROSSTE80A01H501X",
                "email": "stefano.rossi@example.com",
                "emergencyContactPhone": "3405642105"
            }
        ]
    },
    {
        "id": 20,
        "destination": "Los Angeles",
        "begin": "2025-06-15",
        "end": "2025-06-25",
        "people": [
            {
                "name": "Maria",
                "surname": "Bianchi",
                "phoneNumber": "3398694816",
                "codiceFiscale": "BIAMAR94A01H501X",
                "email": "maria.bianchi@example.com",
                "emergencyContactPhone": "3439160729"
            },
            {
                "name": "Maria",
                "surname": "Marrone",
                "phoneNumber": "3587338577",
                "codiceFiscale": "MARMAR72A01H501X",
                "email": "maria.marrone@example.com",
                "emergencyContactPhone": "3395096725"
            },
            {
                "name": "Giovanni",
                "surname": "Verdi",
                "phoneNumber": "3741706915",
                "codiceFiscale": "VERGIO76A01H501X",
                "email": "giovanni.verdi@example.com",
                "emergencyContactPhone": "3171717413"
            },
            {
                "name": "Andrea",
                "surname": "Blu",
                "phoneNumber": "3579929005",
                "codiceFiscale": "BLUAND90A01H501X",
                "email": "andrea.blu@example.com",
                "emergencyContactPhone": "3759287558"
            },
            {
                "name": "Andrea",
                "surname": "Blu",
                "phoneNumber": "3723511485",
                "codiceFiscale": "BLUAND72A01H501X",
                "email": "andrea.blu@example.com",
                "emergencyContactPhone": "3974493998"
            },
            {
                "name": "Luca",
                "surname": "Blu",
                "phoneNumber": "3812389803",
                "codiceFiscale": "BLULUC75A01H501X",
                "email": "luca.blu@example.com",
                "emergencyContactPhone": "3397858923"
            },
            {
                "name": "Stefano",
                "surname": "Rosa",
                "phoneNumber": "3920406430",
                "codiceFiscale": "ROSSTE85A01H501X",
                "email": "stefano.rosa@example.com",
                "emergencyContactPhone": "3327606933"
            },
            {
                "name": "Luca",
                "surname": "Neri",
                "phoneNumber": "3731240701",
                "codiceFiscale": "NERLUC77A01H501X",
                "email": "luca.neri@example.com",
                "emergencyContactPhone": "3567531811"
            }
        ]
    },
    {
        "id": 21,
        "destination": "Buenos Aires",
        "begin": "2025-07-20",
        "end": "2025-07-30",
        "people": [
            {
                "name": "Francesca",
                "surname": "Grigi",
                "phoneNumber": "3485263021",
                "codiceFiscale": "GRIFRA86A01H501X",
                "email": "francesca.grigi@example.com",
                "emergencyContactPhone": "3489007021"
            },
            {
                "name": "Chiara",
                "surname": "Viola",
                "phoneNumber": "3894082508",
                "codiceFiscale": "VIOCHI74A01H501X",
                "email": "chiara.viola@example.com",
                "emergencyContactPhone": "3596678005"
            },
            {
                "name": "Luca",
                "surname": "Grigi",
                "phoneNumber": "3014567533",
                "codiceFiscale": "GRILUC94A01H501X",
                "email": "luca.grigi@example.com",
                "emergencyContactPhone": "3373359445"
            },
            {
                "name": "Elena",
                "surname": "Viola",
                "phoneNumber": "3439904937",
                "codiceFiscale": "VIOELE95A01H501X",
                "email": "elena.viola@example.com",
                "emergencyContactPhone": "3322913662"
            },
            {
                "name": "Giovanni",
                "surname": "Blu",
                "phoneNumber": "3959116495",
                "codiceFiscale": "BLUGIO70A01H501X",
                "email": "giovanni.blu@example.com",
                "emergencyContactPhone": "3315005500"
            },
            {
                "name": "Andrea",
                "surname": "Rossi",
                "phoneNumber": "3681994731",
                "codiceFiscale": "ROSAND71A01H501X",
                "email": "andrea.rossi@example.com",
                "emergencyContactPhone": "3137746484"
            },
            {
                "name": "Francesca",
                "surname": "Rossi",
                "phoneNumber": "3898717130",
                "codiceFiscale": "ROSFRA76A01H501X",
                "email": "francesca.rossi@example.com",
                "emergencyContactPhone": "3627385493"
            },
            {
                "name": "Stefano",
                "surname": "Viola",
                "phoneNumber": "3320453503",
                "codiceFiscale": "VIOSTE70A01H501X",
                "email": "stefano.viola@example.com",
                "emergencyContactPhone": "3923641366"
            }
        ]
    },
    {
        "id": 22,
        "destination": "Toronto",
        "begin": "2025-08-10",
        "end": "2025-08-18",
        "people": [
            {
                "name": "Giovanni",
                "surname": "Blu",
                "phoneNumber": "3997723253",
                "codiceFiscale": "BLUGIO91A01H501X",
                "email": "giovanni.blu@example.com",
                "emergencyContactPhone": "3150200178"
            },
            {
                "name": "Laura",
                "surname": "Viola",
                "phoneNumber": "3593433440",
                "codiceFiscale": "VIOLAU85A01H501X",
                "email": "laura.viola@example.com",
                "emergencyContactPhone": "3788551285"
            },
            {
                "name": "Francesca",
                "surname": "Gialli",
                "phoneNumber": "3303666578",
                "codiceFiscale": "GIAFRA88A01H501X",
                "email": "francesca.gialli@example.com",
                "emergencyContactPhone": "3337562541"
            },
            {
                "name": "Chiara",
                "surname": "Grigi",
                "phoneNumber": "3239050776",
                "codiceFiscale": "GRICHI87A01H501X",
                "email": "chiara.grigi@example.com",
                "emergencyContactPhone": "3162102458"
            },
            {
                "name": "Maria",
                "surname": "Viola",
                "phoneNumber": "3895605587",
                "codiceFiscale": "VIOMAR77A01H501X",
                "email": "maria.viola@example.com",
                "emergencyContactPhone": "3274861323"
            },
            {
                "name": "Chiara",
                "surname": "Bianchi",
                "phoneNumber": "3370498556",
                "codiceFiscale": "BIACHI77A01H501X",
                "email": "chiara.bianchi@example.com",
                "emergencyContactPhone": "3760500575"
            },
            {
                "name": "Stefano",
                "surname": "Neri",
                "phoneNumber": "3489768988",
                "codiceFiscale": "NERSTE96A01H501X",
                "email": "stefano.neri@example.com",
                "emergencyContactPhone": "3562686484"
            },
            {
                "name": "Chiara",
                "surname": "Viola",
                "phoneNumber": "3673317542",
                "codiceFiscale": "VIOCHI80A01H501X",
                "email": "chiara.viola@example.com",
                "emergencyContactPhone": "3113037285"
            }
        ]
    },
    {
        "id": 23,
        "destination": "Città del Capo",
        "begin": "2025-09-05",
        "end": "2025-09-15",
        "people": [
            {
                "name": "Maria",
                "surname": "Blu",
                "phoneNumber": "3225080739",
                "codiceFiscale": "BLUMAR88A01H501X",
                "email": "maria.blu@example.com",
                "emergencyContactPhone": "3282419160"
            },
            {
                "name": "Maria",
                "surname": "Gialli",
                "phoneNumber": "3697117966",
                "codiceFiscale": "GIAMAR89A01H501X",
                "email": "maria.gialli@example.com",
                "emergencyContactPhone": "3904890782"
            },
            {
                "name": "Giovanni",
                "surname": "Grigi",
                "phoneNumber": "3062981566",
                "codiceFiscale": "GRIGIO83A01H501X",
                "email": "giovanni.grigi@example.com",
                "emergencyContactPhone": "3626830342"
            },
            {
                "name": "Marco",
                "surname": "Bianchi",
                "phoneNumber": "3160702617",
                "codiceFiscale": "BIAMAR84A01H501X",
                "email": "marco.bianchi@example.com",
                "emergencyContactPhone": "3060171872"
            },
            {
                "name": "Stefano",
                "surname": "Gialli",
                "phoneNumber": "3686703949",
                "codiceFiscale": "GIASTE72A01H501X",
                "email": "stefano.gialli@example.com",
                "emergencyContactPhone": "3106483689"
            },
            {
                "name": "Laura",
                "surname": "Marrone",
                "phoneNumber": "3971679240",
                "codiceFiscale": "MARLAU73A01H501X",
                "email": "laura.marrone@example.com",
                "emergencyContactPhone": "3998577498"
            },
            {
                "name": "Francesca",
                "surname": "Grigi",
                "phoneNumber": "3354847370",
                "codiceFiscale": "GRIFRA92A01H501X",
                "email": "francesca.grigi@example.com",
                "emergencyContactPhone": "3183414504"
            },
            {
                "name": "Maria",
                "surname": "Bianchi",
                "phoneNumber": "3701690262",
                "codiceFiscale": "BIAMAR96A01H501X",
                "email": "maria.bianchi@example.com",
                "emergencyContactPhone": "3583712284"
            }
        ]
    },
    {
        "id": 24,
        "destination": "San Pietroburgo",
        "begin": "2025-10-15",
        "end": "2025-10-22",
        "people": [
            {
                "name": "Andrea",
                "surname": "Bianchi",
                "phoneNumber": "3548080737",
                "codiceFiscale": "BIAAND98A01H501X",
                "email": "andrea.bianchi@example.com",
                "emergencyContactPhone": "3530634764"
            },
            {
                "name": "Stefano",
                "surname": "Marrone",
                "phoneNumber": "3214844630",
                "codiceFiscale": "MARSTE98A01H501X",
                "email": "stefano.marrone@example.com",
                "emergencyContactPhone": "3342761118"
            },
            {
                "name": "Stefano",
                "surname": "Rossi",
                "phoneNumber": "3068169308",
                "codiceFiscale": "ROSSTE84A01H501X",
                "email": "stefano.rossi@example.com",
                "emergencyContactPhone": "3114532361"
            },
            {
                "name": "Marco",
                "surname": "Verdi",
                "phoneNumber": "3020766767",
                "codiceFiscale": "VERMAR92A01H501X",
                "email": "marco.verdi@example.com",
                "emergencyContactPhone": "3615381785"
            },
            {
                "name": "Maria",
                "surname": "Viola",
                "phoneNumber": "3031654216",
                "codiceFiscale": "VIOMAR91A01H501X",
                "email": "maria.viola@example.com",
                "emergencyContactPhone": "3562633272"
            },
            {
                "name": "Laura",
                "surname": "Viola",
                "phoneNumber": "3894299577",
                "codiceFiscale": "VIOLAU85A01H501X",
                "email": "laura.viola@example.com",
                "emergencyContactPhone": "3353020609"
            },
            {
                "name": "Maria",
                "surname": "Rossi",
                "phoneNumber": "3709152144",
                "codiceFiscale": "ROSMAR71A01H501X",
                "email": "maria.rossi@example.com",
                "emergencyContactPhone": "3019653614"
            },
            {
                "name": "Maria",
                "surname": "Verdi",
                "phoneNumber": "3441958576",
                "codiceFiscale": "VERMAR72A01H501X",
                "email": "maria.verdi@example.com",
                "emergencyContactPhone": "3477824272"
            }
        ]
    },
    {
        "id": 25,
        "destination": "Istanbul",
        "begin": "2025-11-05",
        "end": "2025-11-12",
        "people": [
            {
                "name": "Laura",
                "surname": "Rossi",
                "phoneNumber": "3471361013",
                "codiceFiscale": "ROSLAU91A01H501X",
                "email": "laura.rossi@example.com",
                "emergencyContactPhone": "3052908861"
            },
            {
                "name": "Marco",
                "surname": "Rosa",
                "phoneNumber": "3739301672",
                "codiceFiscale": "ROSMAR88A01H501X",
                "email": "marco.rosa@example.com",
                "emergencyContactPhone": "3722694393"
            },
            {
                "name": "Elena",
                "surname": "Viola",
                "phoneNumber": "3360698370",
                "codiceFiscale": "VIOELE78A01H501X",
                "email": "elena.viola@example.com",
                "emergencyContactPhone": "3338745704"
            },
            {
                "name": "Laura",
                "surname": "Verdi",
                "phoneNumber": "3137579172",
                "codiceFiscale": "VERLAU99A01H501X",
                "email": "laura.verdi@example.com",
                "emergencyContactPhone": "3547223577"
            },
            {
                "name": "Maria",
                "surname": "Verdi",
                "phoneNumber": "3270211357",
                "codiceFiscale": "VERMAR91A01H501X",
                "email": "maria.verdi@example.com",
                "emergencyContactPhone": "3304021470"
            },
            {
                "name": "Luca",
                "surname": "Gialli",
                "phoneNumber": "3014891783",
                "codiceFiscale": "GIALUC73A01H501X",
                "email": "luca.gialli@example.com",
                "emergencyContactPhone": "3281483651"
            },
            {
                "name": "Laura",
                "surname": "Rossi",
                "phoneNumber": "3913331237",
                "codiceFiscale": "ROSLAU88A01H501X",
                "email": "laura.rossi@example.com",
                "emergencyContactPhone": "3181003440"
            },
            {
                "name": "Maria",
                "surname": "Blu",
                "phoneNumber": "3860190291",
                "codiceFiscale": "BLUMAR86A01H501X",
                "email": "maria.blu@example.com",
                "emergencyContactPhone": "3765250014"
            }
        ]
    },
    {
        "id": 26,
        "destination": "Singapore",
        "begin": "2025-12-10",
        "end": "2025-12-20",
        "people": [
            {
                "name": "Francesca",
                "surname": "Rossi",
                "phoneNumber": "3856692098",
                "codiceFiscale": "ROSFRA88A01H501X",
                "email": "francesca.rossi@example.com",
                "emergencyContactPhone": "3140340039"
            },
            {
                "name": "Luca",
                "surname": "Rossi",
                "phoneNumber": "3041965858",
                "codiceFiscale": "ROSLUC82A01H501X",
                "email": "luca.rossi@example.com",
                "emergencyContactPhone": "3082037577"
            },
            {
                "name": "Laura",
                "surname": "Verdi",
                "phoneNumber": "3909295403",
                "codiceFiscale": "VERLAU82A01H501X",
                "email": "laura.verdi@example.com",
                "emergencyContactPhone": "3359902660"
            },
            {
                "name": "Maria",
                "surname": "Gialli",
                "phoneNumber": "3931991999",
                "codiceFiscale": "GIAMAR89A01H501X",
                "email": "maria.gialli@example.com",
                "emergencyContactPhone": "3896257093"
            },
            {
                "name": "Giovanni",
                "surname": "Marrone",
                "phoneNumber": "3851434165",
                "codiceFiscale": "MARGIO94A01H501X",
                "email": "giovanni.marrone@example.com",
                "emergencyContactPhone": "3697919245"
            },
            {
                "name": "Luca",
                "surname": "Grigi",
                "phoneNumber": "3062358588",
                "codiceFiscale": "GRILUC75A01H501X",
                "email": "luca.grigi@example.com",
                "emergencyContactPhone": "3529036521"
            },
            {
                "name": "Andrea",
                "surname": "Grigi",
                "phoneNumber": "3689825925",
                "codiceFiscale": "GRIAND72A01H501X",
                "email": "andrea.grigi@example.com",
                "emergencyContactPhone": "3666413315"
            },
            {
                "name": "Maria",
                "surname": "Verdi",
                "phoneNumber": "3740227777",
                "codiceFiscale": "VERMAR89A01H501X",
                "email": "maria.verdi@example.com",
                "emergencyContactPhone": "3688855680"
            }
        ]
    },
    {
        "id": 27,
        "destination": "Copenhagen",
        "begin": "2025-05-18",
        "end": "2025-05-24",
        "people": [
            {
                "name": "Giovanni",
                "surname": "Rossi",
                "phoneNumber": "3391594510",
                "codiceFiscale": "ROSGIO97A01H501X",
                "email": "giovanni.rossi@example.com",
                "emergencyContactPhone": "3433709823"
            },
            {
                "name": "Elena",
                "surname": "Viola",
                "phoneNumber": "3484045918",
                "codiceFiscale": "VIOELE82A01H501X",
                "email": "elena.viola@example.com",
                "emergencyContactPhone": "3934625591"
            },
            {
                "name": "Maria",
                "surname": "Neri",
                "phoneNumber": "3033298894",
                "codiceFiscale": "NERMAR77A01H501X",
                "email": "maria.neri@example.com",
                "emergencyContactPhone": "3177270134"
            },
            {
                "name": "Andrea",
                "surname": "Blu",
                "phoneNumber": "3941738764",
                "codiceFiscale": "BLUAND83A01H501X",
                "email": "andrea.blu@example.com",
                "emergencyContactPhone": "3244809279"
            },
            {
                "name": "Andrea",
                "surname": "Blu",
                "phoneNumber": "3075350075",
                "codiceFiscale": "BLUAND93A01H501X",
                "email": "andrea.blu@example.com",
                "emergencyContactPhone": "3431825872"
            },
            {
                "name": "Maria",
                "surname": "Verdi",
                "phoneNumber": "3774650216",
                "codiceFiscale": "VERMAR76A01H501X",
                "email": "maria.verdi@example.com",
                "emergencyContactPhone": "3207159536"
            },
            {
                "name": "Francesca",
                "surname": "Rosa",
                "phoneNumber": "3897707575",
                "codiceFiscale": "ROSFRA91A01H501X",
                "email": "francesca.rosa@example.com",
                "emergencyContactPhone": "3013078256"
            },
            {
                "name": "Maria",
                "surname": "Viola",
                "phoneNumber": "3704481413",
                "codiceFiscale": "VIOMAR88A01H501X",
                "email": "maria.viola@example.com",
                "emergencyContactPhone": "3239941491"
            }
        ]
    },
    {
        "id": 28,
        "destination": "Oslo",
        "begin": "2025-06-20",
        "end": "2025-06-28",
        "people": [
            {
                "name": "Marco",
                "surname": "Neri",
                "phoneNumber": "3400399839",
                "codiceFiscale": "NERMAR95A01H501X",
                "email": "marco.neri@example.com",
                "emergencyContactPhone": "3007351840"
            },
            {
                "name": "Andrea",
                "surname": "Gialli",
                "phoneNumber": "3886806238",
                "codiceFiscale": "GIAAND76A01H501X",
                "email": "andrea.gialli@example.com",
                "emergencyContactPhone": "3927644162"
            },
            {
                "name": "Andrea",
                "surname": "Viola",
                "phoneNumber": "3526528723",
                "codiceFiscale": "VIOAND83A01H501X",
                "email": "andrea.viola@example.com",
                "emergencyContactPhone": "3584143705"
            },
            {
                "name": "Marco",
                "surname": "Blu",
                "phoneNumber": "3876714572",
                "codiceFiscale": "BLUMAR75A01H501X",
                "email": "marco.blu@example.com",
                "emergencyContactPhone": "3312628914"
            },
            {
                "name": "Maria",
                "surname": "Viola",
                "phoneNumber": "3694349544",
                "codiceFiscale": "VIOMAR75A01H501X",
                "email": "maria.viola@example.com",
                "emergencyContactPhone": "3808606243"
            },
            {
                "name": "Marco",
                "surname": "Verdi",
                "phoneNumber": "3648390692",
                "codiceFiscale": "VERMAR86A01H501X",
                "email": "marco.verdi@example.com",
                "emergencyContactPhone": "3346679498"
            },
            {
                "name": "Marco",
                "surname": "Bianchi",
                "phoneNumber": "3827512653",
                "codiceFiscale": "BIAMAR93A01H501X",
                "email": "marco.bianchi@example.com",
                "emergencyContactPhone": "3705150134"
            },
            {
                "name": "Luca",
                "surname": "Verdi",
                "phoneNumber": "3557075934",
                "codiceFiscale": "VERLUC95A01H501X",
                "email": "luca.verdi@example.com",
                "emergencyContactPhone": "3406995073"
            }
        ]
    },
    {
        "id": 29,
        "destination": "Lisbona",
        "begin": "2025-07-15",
        "end": "2025-07-22",
        "people": [
            {
                "name": "Elena",
                "surname": "Rosa",
                "phoneNumber": "3103274612",
                "codiceFiscale": "ROSELE70A01H501X",
                "email": "elena.rosa@example.com",
                "emergencyContactPhone": "3465503354"
            },
            {
                "name": "Giovanni",
                "surname": "Neri",
                "phoneNumber": "3463031467",
                "codiceFiscale": "NERGIO84A01H501X",
                "email": "giovanni.neri@example.com",
                "emergencyContactPhone": "3090461374"
            },
            {
                "name": "Andrea",
                "surname": "Neri",
                "phoneNumber": "3724217538",
                "codiceFiscale": "NERAND92A01H501X",
                "email": "andrea.neri@example.com",
                "emergencyContactPhone": "3476332516"
            },
            {
                "name": "Elena",
                "surname": "Blu",
                "phoneNumber": "3947314781",
                "codiceFiscale": "BLUELE92A01H501X",
                "email": "elena.blu@example.com",
                "emergencyContactPhone": "3075534783"
            },
            {
                "name": "Andrea",
                "surname": "Rosa",
                "phoneNumber": "3372529543",
                "codiceFiscale": "ROSAND89A01H501X",
                "email": "andrea.rosa@example.com",
                "emergencyContactPhone": "3871021243"
            },
            {
                "name": "Laura",
                "surname": "Verdi",
                "phoneNumber": "3465203674",
                "codiceFiscale": "VERLAU85A01H501X",
                "email": "laura.verdi@example.com",
                "emergencyContactPhone": "3135322777"
            },
            {
                "name": "Luca",
                "surname": "Bianchi",
                "phoneNumber": "3441634298",
                "codiceFiscale": "BIALUC75A01H501X",
                "email": "luca.bianchi@example.com",
                "emergencyContactPhone": "3102932773"
            },
            {
                "name": "Chiara",
                "surname": "Gialli",
                "phoneNumber": "3501046280",
                "codiceFiscale": "GIACHI76A01H501X",
                "email": "chiara.gialli@example.com",
                "emergencyContactPhone": "3593138943"
            }
        ]
    },
    {
        "id": 30,
        "destination": "Valencia",
        "begin": "2025-08-25",
        "end": "2025-08-31",
        "people": [
            {
                "name": "Elena",
                "surname": "Grigi",
                "phoneNumber": "3098739347",
                "codiceFiscale": "GRIELE72A01H501X",
                "email": "elena.grigi@example.com",
                "emergencyContactPhone": "3671033651"
            },
            {
                "name": "Maria",
                "surname": "Grigi",
                "phoneNumber": "3570997321",
                "codiceFiscale": "GRIMAR74A01H501X",
                "email": "maria.grigi@example.com",
                "emergencyContactPhone": "3678635590"
            },
            {
                "name": "Chiara",
                "surname": "Rossi",
                "phoneNumber": "3842019948",
                "codiceFiscale": "ROSCHI76A01H501X",
                "email": "chiara.rossi@example.com",
                "emergencyContactPhone": "3984594768"
            },
            {
                "name": "Laura",
                "surname": "Gialli",
                "phoneNumber": "3631850249",
                "codiceFiscale": "GIALAU92A01H501X",
                "email": "laura.gialli@example.com",
                "emergencyContactPhone": "3023760809"
            },
            {
                "name": "Chiara",
                "surname": "Neri",
                "phoneNumber": "3378352958",
                "codiceFiscale": "NERCHI95A01H501X",
                "email": "chiara.neri@example.com",
                "emergencyContactPhone": "3211356452"
            },
            {
                "name": "Elena",
                "surname": "Rosa",
                "phoneNumber": "3339998939",
                "codiceFiscale": "ROSELE94A01H501X",
                "email": "elena.rosa@example.com",
                "emergencyContactPhone": "3962720496"
            },
            {
                "name": "Andrea",
                "surname": "Bianchi",
                "phoneNumber": "3888385441",
                "codiceFiscale": "BIAAND71A01H501X",
                "email": "andrea.bianchi@example.com",
                "emergencyContactPhone": "3524408577"
            },
            {
                "name": "Giovanni",
                "surname": "Marrone",
                "phoneNumber": "3188994071",
                "codiceFiscale": "MARGIO94A01H501X",
                "email": "giovanni.marrone@example.com",
                "emergencyContactPhone": "3279336550"
            }
        ]
    }
]

export default journeys