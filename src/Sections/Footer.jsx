export default function Footer(){
    return(
        <>
            <div class="flex sm:gap-2">
                <p class="text-right">Copyright &copy; <span id="year">{new Date().getFullYear()}</span></p>
                <p class="text-right">All Rights Reserved</p>
            </div>
            <nav class="flex gap-2" aria-label="footer">
                <a href="/" class="hover:opacity-90">Terms & Conditions</a>
                <a href="/" class="hover:opacity-90">Privacy</a>
                <a href="/" class="hover:opacity-90">Manage Cookies</a>
                <a href="/" class="hover:opacity-90">Security</a>
                <a href="/" class="hover:opacity-90">Contact</a>
            </nav>
        </>
    )
}