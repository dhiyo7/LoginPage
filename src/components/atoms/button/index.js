import React from 'react'
import { Button } from 'react-bootstrap'

export default function button({title, color, type}) {
    return (
        <div>
            <Button className="px-5" variant={color} type={type}>{title}</Button>
        </div>
    )
}
