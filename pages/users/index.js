import React from 'react';
import Link from 'next/link';

const index = ({ users }) => {
    return (
        <div>
            <h2>This is users main page. Total {users.length} users</h2>
            {
                users.map(user => <div key={user.id}>
                    <h2>Name: {user.name}  <Link href={`/users/${user.id}`}>
                        <button>explore</button>
                    </Link></h2>
                </div>)
            }
        </div>
    );
};

export default index;

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return {
        props: { users: data }, // will be passed to the page component as props
    }
}