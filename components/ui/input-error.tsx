export function Errors(props: { errors?: string[] }) {
    if (!props.errors?.length) return null;
    return (
        <div>
            {props.errors.map((err) => (
                <p className="text-sm text-red-400" key={err}>
                    {err}
                </p>
            ))}
        </div>
    );
}
