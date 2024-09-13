import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const Form = () => {
    const schema = yup.object().shape({
        fullName: yup.string().required("Your full name is required!"),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(19).required(),
        password: yup.string().min(6).max(20).required(),
        passwordConfirm: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match!").required(),
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });


    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name..." {...register("fullName")}/>
            <p>{errors.fullName?.message}</p>
            <input type="text" placeholder="Email..." {...register("email")}/>
            <p>{errors.email?.message}</p>
            <input type="number" placeholder="Age..." {...register("age")}/>
            <p>{errors.age?.message}</p>
            <input type="password" placeholder="Password..." {...register("password")}/>
            <p>{errors.password?.message}</p>
            <input type="password" placeholder="Confirm Password..." {...register("passwordConfirm")}/>
            <p>{errors.passwordConfirm?.message}</p>
            <input type="submit" />
        </form>
    )
}