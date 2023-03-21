"use sctrict"
let users = fetch(`https://reqres.in/api/users?per_page=12`).then((e) => {
    return e.json()
}
);

users.then((result) => {
    console.log(`Фамилии всех пользователей: `)
    result.data.forEach(element => {
        console.log(element.last_name)
    });
}
);

users.then((result) => {
    console.log(`Пользователи, фамилии которых начинаются с F: `)
    result.data.forEach(element => {
        if(element.last_name.includes(`F`)){console.log(element)}
    });
}
);

users.then((result) => {
    let user = result.data.reduce((arr, curr) => {
        return arr + (curr.first_name + " " + curr.last_name + ", ")
    }, "");
    user = user.substring(0, user.length - 2);
    console.log(`Наша база содержит данные следующих пользователей ${user}`)
}
);

users.then((result) => {
    console.log(`Все ключи: `)
    console.log(Object.keys(result.data[0]))
}
);