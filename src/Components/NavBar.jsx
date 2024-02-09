import React from "react";
import { Link } from "react-router-dom";
import '../Styles/main.css'

const NavBar = ({topics}) => {

    const handleTopicsSelect = (event) => {
        const selectedTopicURL = event.target.value
        window.location.href = selectedTopicURL
    }
    
    return (
        <nav className="navigation-bar">
            <ul className="navigation-links">
                <li><Link to='/'>HOME</Link></li>
                <li>
                <h1 className="choose-your-topics">CHOOSE YOUR TOPIC</h1>
                    <form>
                      <label>Find articles on  </label>
                        <select id="select-bar" onChange={handleTopicsSelect}>
                            <option>
                             Please select a topic...
                            </option>
                                {topics.map((topics) => (
                                    <option className="topics-options" key={topics.slug} value={`/topics/${topics.slug}`}>
                                        {topics.slug}
                                    </option>
                                ))}
                        </select>
                    </form>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar