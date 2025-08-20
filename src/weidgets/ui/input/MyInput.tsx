import { useEffect, useState} from "react";

type InputType = {
    value: string
    onChange: (localValue: string)=> void
}
export const CommentInput = ({ value, onChange }:InputType) => {
    const [localValue, setLocalValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => onChange(localValue), 300);
        return () => clearTimeout(timer);
    }, [localValue, onChange]);

    return <textarea value={localValue} onChange={(e) => setLocalValue(e.target.value)} />;
};