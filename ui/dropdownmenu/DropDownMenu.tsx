"use client";
import * as React from "react";
import { DropdownMenu } from "radix-ui";
import { select_option } from "@/types/select_option";

export default function DropdownMenuUI({
    trigger,
    options,
    clickEvent,
}: {
    trigger: string;
    options?: select_option[];
    clickEvent: (value: string) => void;
}) {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button>{trigger}</button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className="bg-white text-red-500"
                    sideOffset={5}
                >
                    {options?.map((option) => {
                        return (
                            <DropdownMenu.Item
                                asChild
                                key={option.value}
                                disabled={option.disabled}
                            >
                                <div
                                    onClick={() => {
                                        clickEvent(option.value);
                                    }}
                                    className="!bg-white "
                                >
                                    {option.text}
                                </div>
                            </DropdownMenu.Item>
                        );
                    })}

                    <DropdownMenu.Arrow className="DropdownMenuArrow" />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}
