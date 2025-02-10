import { IconCheck } from "@tabler/icons-react";
import classNames from "classnames";
import { Select } from "radix-ui";

export default function SelectItem({
    children,
    className,
    value,
    disabled,
    ...props
} : {
    children: React.ReactElement | string,
    className?: string,
    value: string,
    disabled?: boolean,
}) {
    return (
        <Select.Item
            className={classNames("SelectItem", className)}
            value={value}
            {...props}
            disabled={disabled}
        >
            <Select.ItemText>{children}</Select.ItemText>
            <Select.ItemIndicator className="SelectItemIndicator">
                <IconCheck />
            </Select.ItemIndicator>
        </Select.Item>
    );
}
