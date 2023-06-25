# KIIT SSS API

An express API that scrapes KIIT SAP Student Self Service portal. Live at https://kiit-sss.onrender.com/api/v1

# Usage

## Get login cookie: [/cookie](https://kiit-sss.onrender.com/api/v1/cookie)

### Query parameters

| Name     | Type    |
| -------- | ------- |
| username | Integer |
| password | String  |

### Example: Request

```
curl -X GET -H 'Content-Type: application/json' -d '{"username": 6969696,"password":"Awesome@Password"}' https://kiit-sss.onrender.com/api/v1/cookie
```

### Example: Response

```
{
  "cookie": "MYSAPSSO2=aBigAssString"
}
```

## Get attendance details: [/attendance](https://kiit-sss.onrender.com/api/v1/attendance)

### Query parameters

| Name    | Type                          |
| ------- | ----------------------------- |
| cookie  | String                        |
| year    | Integer                       |
| session | String (`Spring` or `Autumn`) |

### Example: Request

```
curl -X GET -H 'Content-Type: application/json' -d '{"cookie": "MYSAPSSO2=aBigAssString", "year": 2022, "session": "Spring"}' https://kiit-sss.onrender.com/api/v1/attendance
```

### Example: Response

```
{
  "subject": [ "Subject1", ... ],
  "presentCount": [ "37.00", ... ],
  "absentCount": [ "3.00", ... ],
  "dayCount": [ "40.00", ... ],
  "presentPercent": [ "92.50", ... ],
  "faculty": [ "Teacher1", ... ]
}
```
