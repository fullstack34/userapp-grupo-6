export default function MenuNav() {

    return`
        <nav id="Menu-Nav" class="barra-nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contacts</a></li>
                <button  class="btn-login">
                    <a href="login.html">Login <i class="fa-solid fa-arrow-right-to-bracket"></i></a>
                </button>
            </ul>
        </nav>
    `;

}