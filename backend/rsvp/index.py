import json
import os
import psycopg2

def handler(event: dict, context) -> dict:
    """RSVP: сохранение и получение списка гостей выпускного вечера."""

    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()

    method = event.get('httpMethod')

    if method == 'POST':
        body = json.loads(event.get('body') or '{}')
        name = (body.get('name') or '').strip()
        if not name:
            conn.close()
            return {'statusCode': 400, 'headers': cors_headers, 'body': json.dumps({'error': 'Имя обязательно'})}

        cur.execute(
            "INSERT INTO t_p5724392_new_tech_initiative_.rsvp (name) VALUES (%s) RETURNING id, name, created_at",
            (name,)
        )
        row = cur.fetchone()
        conn.commit()
        conn.close()
        return {
            'statusCode': 200,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'body': json.dumps({'id': row[0], 'name': row[1], 'created_at': str(row[2])})
        }

    if method == 'GET':
        cur.execute(
            "SELECT id, name, created_at FROM t_p5724392_new_tech_initiative_.rsvp ORDER BY created_at ASC"
        )
        rows = cur.fetchall()
        conn.close()
        guests = [{'id': r[0], 'name': r[1], 'created_at': str(r[2])} for r in rows]
        return {
            'statusCode': 200,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'body': json.dumps({'guests': guests, 'total': len(guests)})
        }

    conn.close()
    return {'statusCode': 405, 'headers': cors_headers, 'body': json.dumps({'error': 'Method not allowed'})}
