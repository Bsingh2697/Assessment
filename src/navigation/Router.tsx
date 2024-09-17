import { NavigationContainer } from "@react-navigation/native"
import { EvStack } from "./EvStack"

function Router(){
    // Based on certain conditions we can manipulate which stack to render
    return <NavigationContainer>
        <EvStack/>
    </NavigationContainer>
}

export {Router}