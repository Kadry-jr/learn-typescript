type ID = string | number;
let userId: ID = 101;

type Admin = { role: string };
type Person = { name: string };
type AdminUser = Admin & Person;