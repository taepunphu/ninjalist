import Link from "next/link"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Oooops...</h2>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link> </p>
        </div>
     );
}
 
export default NotFound
