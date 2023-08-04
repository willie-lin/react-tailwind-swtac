const LoginFields =[
    {
    labelText: "email address",
    labelFor: "email-address",
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete:"email",
    isRequired:true,
    placeholder:"Email address",
    },
    {
        labelText: "phone number",
        labelFor: "phone-number",
        id: "phone-number",
        name: "phone",
        type: "phone",
        autoComplete:"phone",
        isRequired:true,
        placeholder:"Phone-number",
    },
    {
        labelText: "user name",
        labelFor: "user-name",
        id: "user-name",
        name: "username",
        type: "username",
        autoComplete:"username",
        isRequired:true,
        placeholder:"User-name",
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Password",
    }
]

const SignupFields = [
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username"
    },
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"
    },
    {
        labelText: "phone number",
        labelFor: "phone-number",
        id: "phone-number",
        name: "phone",
        type: "phone",
        autoComplete:"phone",
        isRequired:true,
        placeholder:"Phone-number",
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"
    },
    {
        labelText:"Confirm Password",
        labelFor:"confirm-password",
        id:"confirm-password",
        name:"confirm-password",
        type:"password",
        autoComplete:"confirm-password",
        isRequired:true,
        placeholder:"Confirm Password"
    }
]

export { LoginFields, SignupFields}