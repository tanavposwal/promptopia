"use client";

import { useFormStatus } from 'react-dom'
import { Button } from "../ui/button";
import { ReloadIcon } from '@radix-ui/react-icons';

export default function FormBtn({ text }: { text: string }) {
    const { pending } = useFormStatus()

    return (
        <Button type="submit" disabled={pending}>
            {pending && <ReloadIcon className="mr-2 h-3 w-3 animate-spin" />}{text}</Button>
    )
}