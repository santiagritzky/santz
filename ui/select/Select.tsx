import { Select } from "radix-ui";
import React from "react";
import SelectItem from "./SelectItem";
import {
    IconCircleChevronDownFilled,
    IconCircleChevronUpFilled,
} from "@tabler/icons-react";
import { select_option } from "@/types/select_option";

export default function SelectUI({
    select_options,
}: {
    select_options?: select_option[];
}) {
    return (
        <Select.Root>
            <Select.Trigger
                className="bg-white w-28 gap-12 flex flex-row justify-between"
                aria-label="Food"
            >
                <Select.Value placeholder="Selecione um sabor" />
                <Select.Icon className="SelectIcon">
                    <IconCircleChevronDownFilled />
                </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
                <Select.Content className="bg-foreground rounded-md px-4 text-black">
                    <Select.ScrollUpButton className="SelectScrollButton">
                        <IconCircleChevronUpFilled />
                    </Select.ScrollUpButton>
                    <Select.Viewport className="SelectViewport">
                        {select_options?.map((option) => {
                            return (
                                <SelectItem
                                    key={option.value}
                                    value={option.value}
                                    disabled={option.disabled}
                                >
                                    {option.text}
                                </SelectItem>
                            );
                        })}
                    </Select.Viewport>
                    <Select.ScrollDownButton className="SelectScrollButton">
                        <IconCircleChevronDownFilled />
                    </Select.ScrollDownButton>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );
}
