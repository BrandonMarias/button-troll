const { render, screen } = require("@testing-library/react")
const { UserContext } = require("../../src/09-useContext/context/UserContext")
const { HomePage } = require("../../src/09-useContext/HomePage")

describe("test on <HomePage />", () => {
    test("should render correctly", () => {
        const user = {
            id: 1,
            name: "Brandon",
            email: "hola@mundo.com"
        }
        render(
            <UserContext.Provider value={{user}}>
                <HomePage />
            </UserContext.Provider>
        )
        
        expect(screen.getByLabelText("pre").textContent).toContain(JSON.stringify(user, null, 3))

        
    })

})