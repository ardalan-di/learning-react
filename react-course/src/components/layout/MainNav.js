import { Link } from 'react-router-dom';


function MainNav()
{
    return <header>
        <div>React meetup</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetup</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>New meetup</Link>
                </li>
                <li>
                    <Link to='/favorites'>Favorites</Link>
                </li>
            </ul>
        </nav>

    </header>
}

export default MainNav;