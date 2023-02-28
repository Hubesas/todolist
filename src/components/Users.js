
const Users = ({user}) => {
    console.log(user)
    return (
        <div className="user" >
            <h1>{user[0].id.name} - {user[0].id.value}</h1>
            <h1>{user[0].registered.date}</h1>
            <img src={user[0].picture.large} alt=""/>
            <h1>{user[0].name.title}. {user[0].name.first} {user[0].name.last}</h1>
            <h1>Age: {user[0].registered.age}, Gender: {user[0].gender}</h1>
                <h1>Email: {user[0].email}</h1>

                <h1>{user[0].location.street.name} st., {user[0].location.city}, {user[0].location.state},  {user[0].location.country}  </h1>
                <h1>Timezone: {user[0].location.timezone.offset}, {user[0].location.timezone.description}</h1>

        </div>
    );
};

export default Users;