'use client'
import { select_option } from "@/types/select_option";
import DropdownMenuUI from "@/ui/dropdownmenu/DropDownMenu";
import SelectUI from "@/ui/select/Select";
import Image from "next/image";
import { Form } from "radix-ui";

const cookies_options: select_option[] = [
    { value: "cafe", text: "Café", disabled: false },
    { value: "churros", text: "Churros", disabled: true },
    { value: "tradicional", text: "Tradicional", disabled: false },
    { value: "limao_siciliano", text: "Limão Siciliano", disabled: false },
];

function DropDownTrigger() {
    return <button>Escolha o seu sabor</button>;
}

function testClick(value: string) {
    console.log(value);
}

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full ">
                <Image
                    alt="logo-santz-escuro"
                    src={"/image/santz-logo-dark.png"}
                    width={180}
                    height={38}
                    priority
                />
                <Form.Root>
                    <Form.Field className="FormField" name="email">
                        <div className="flex items-baseline justify-between">
                            <Form.Label className="FormLabel">Nome</Form.Label>
                            <Form.Message match="valueMissing">
                                Por favor coloque seu nome
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <input
                                className="appearance-none rounded-md p-2 ring-0 text-black"
                                type="text"
                                required
                            />
                        </Form.Control>
                    </Form.Field>
                </Form.Root>
                <SelectUI select_options={cookies_options} />
                <DropdownMenuUI
                    options={cookies_options}
                    trigger={<DropDownTrigger />}
                    clickEvent={(value) => {
                        testClick(value);
                    }}
                />
            </main>
        </div>
    );
}
