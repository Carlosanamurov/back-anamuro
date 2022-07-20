
import { Pool } from 'pg'

export const pool = new Pool(
{
host:'ec2-3-227-149-67.compute-1.amazonaws.com',
user:'tadjtfmdicwxra',
password:'78e2efcac4bb95ad3b1dbee21c6615a56d1eefff3431e8ca927b8b9f0b73ee76',
database:'datk8a2e7l7a6h',
port:5432,
ssl: { rejectUnauthorized: false}

}
);