export default function Footer(){
    return(
        <>
            <div class="flex sm:gap-2">
                <p class="text-right mx-2 text-xs sm:text-lg">Copyright &copy; <span id="year">{new Date().getFullYear()}</span></p>
                <p class="text-right text-xs sm:text-lg">All Rights Reserved</p>
            </div>
            <nav class="flex gap-1 justify-center items-center mt-3" aria-label="footer">
                <a href="/" class="hover:opacity-90 text-[10px] w-14 sm:w-36 sm:text-base">Terms & Conditions</a>
                <a href="/" class="hover:opacity-90 text-[10px] w-14 sm:w-36 sm:text-base">Privacy</a>
                <a href="/" class="hover:opacity-90 text-[10px] w-14 sm:w-36 sm:text-base">Manage Cookies</a>
                <a href="/" class="hover:opacity-90 text-[10px] w-14 sm:w-36 sm:text-base">Security</a>
                <a href="/" class="hover:opacity-90 text-[10px] w-14 sm:w-36 sm:text-base">Contact</a>
            </nav>
        </>
    )
}