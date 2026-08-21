import { SpinnerBox } from "./Spinner.module";
import { Oval } from 'react-loader-spinner';

export const Loader = () =>{
    return (
                <SpinnerBox> 
                            <Oval
                                height={60}
                                width={60}
                                color="#d6d6d6"
                                visible={true}
                                ariaLabel="oval-loading"
                                secondaryColor="#8a8a8a"
                                strokeWidth={8}
                                strokeWidthSecondary={7}
                            />
                </SpinnerBox>
    )
}