// union |
type UserRole = 'admin' | 'user' | 'guest'

const getDashboard = (role: UserRole) => {
    if (role === 'admin') {
        return 'admin dashboard'
    }
    else if (role === 'user') {
        return 'user dashboard'
    }
    else {
        return 'guest dashboard'
    }
}

getDashboard('user')

// intersection &

type Employee = {
    id: string,
    name: string,
    phoneNo: string
}

type Manager = {
    designation: string,
    teamSize: number
};

type EmployeeManager = Employee & Manager;

const chowdhuryShahab: EmployeeManager = {
    id: '123',
    name: "Chowdhury Shahab",
    phoneNo: "014",
    designation: "manager",
    teamSize: 124
}