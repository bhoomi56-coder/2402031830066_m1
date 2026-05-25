function Hello1() {

    function getName(yourname) {
        return yourname;
    }

    const name = "Bhoomi";

    return (
        <>
            <h1>{getName(name)}</h1>
        </>
    );
}

export default Hello1;