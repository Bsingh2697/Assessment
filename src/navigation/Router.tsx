import { NavigationContainer } from "@react-navigation/native"
import { EKStack } from "./EKStack"

function Router(){
    // Based on certain conditions we can manipulate which stack to render
    return <NavigationContainer>
        <EKStack/>
    </NavigationContainer>
}

export {Router}