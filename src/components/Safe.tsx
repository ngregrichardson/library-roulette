import { Component } from "solid-js";

const Safe: Component<{ref: HTMLHeadingElement }> = (props) => {
    return <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 ref={props.ref} class="text-[10rem] sm:text-[15rem] md:text-[20rem] lg:text-[30rem] xl:text-[40rem] 2xl:text-[45rem] text-[lime] hidden pointer-events-none">Safe!</h1>
    </div>
}

export default Safe;