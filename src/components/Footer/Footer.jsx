import Container from '@mui/material/Container';
import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import logo from "../../assets/logotrnsp.png";
import Button from '@mui/joy/Button';
import { East, Google, Instagram, Twitter } from '@mui/icons-material';
import footerImg from "../../assets/Image2.png";

const Footer = () => {
    const [data, setData] = React.useState({
        email: '',
        status: 'initial',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setData((current) => ({ ...current, status: 'loading' }));
        try {
            // Replace timeout with real backend operation
            setTimeout(() => {
                setData({ email: '', status: 'sent' });
            }, 1500);
        } catch (error) {
            setData((current) => ({ ...current, status: 'failure' }));
        }
    };
    return (
        <div className="bg-[#f99f1c] md:mt-48 mt-32 pb-20">
            <Container maxWidth="lg">
                <div className='grid md:grid-cols-5 items-center'>
                    <div className='md:col-span-3 md:py-0 py-20'>
                        <form onSubmit={handleSubmit} id="demo" className='md:mb-20 mb-12 w-full'>
                            <FormControl>
                                <Input
                                    sx={{ '--Input-decoratorChildHeight': '45px', padding: { md: "7px", sm: "7px", xs: "4px" }, paddingLeft: { md: "20px", sm: "16px", xs: "10px" }, borderRadius: "15px", fontSize: { md: "16px", sm: "14px", xs: "11px" } }}
                                    placeholder="Enter Your Email"
                                    type="email"
                                    required
                                    value={data.email}
                                    onChange={(event) =>
                                        setData({ email: event.target.value, status: 'initial' })
                                    }
                                    error={data.status === 'failure'}
                                    endDecorator={
                                        <Button
                                            variant="solid"
                                            color="primary"
                                            loading={data.status === 'loading'}
                                            type="submit"
                                            sx={{ borderRadius: "15px", marginRight: { md: "5px", sm: "5px", xs: "0px" }, padding: { md: "6px 40px", sm: "5px 30px", xs: "0px" }, background: { md: "#fc6011", sm: "#fc6011", xs: "none" }, color: { md: "white", sm: "white", xs: "#fc6011" } }}
                                        >
                                            <span className='md:text-xl sm:text-lg text-xs'>Subscribe</span>
                                            <East className='ml-2'></East>
                                        </Button>
                                    }
                                />
                                {data.status === 'failure' && (
                                    <FormHelperText
                                        sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
                                    >
                                        Oops! something went wrong, please try again later.
                                    </FormHelperText>
                                )}

                                {data.status === 'sent' && (
                                    <FormHelperText
                                        sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
                                    >
                                        You are all set!
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </form>
                        <div className='space-x-3 sm:hidden flex justify-center mb-12'>
                            <button className='p-2 bg-[#eeeff0] rounded-full text-[#fc6011]'><Google></Google></button>
                            <button className='p-2 bg-[#eeeff0] rounded-full text-[#fc6011]'><Twitter></Twitter></button>
                            <button className='p-2 bg-[#eeeff0] rounded-full text-[#fc6011]'><Instagram></Instagram></button>
                        </div>
                        <img className='mx-auto' src={logo} alt="" />
                        <div className='flex justify-between flex-wrap items-end'>
                            <p className='md:text-xl text-lg font-semibold pt-8 mx-auto'>Copyright&copy;Tripp. All Right Reserved</p>

                            <div className='space-x-3 sm:block hidden'>
                                <button className='p-2 bg-[#eeeff0] rounded-full text-[#fc6011]'><Google></Google></button>
                                <button className='p-2 bg-[#eeeff0] rounded-full text-[#fc6011]'><Twitter></Twitter></button>
                                <button className='p-2 bg-[#eeeff0] rounded-full text-[#fc6011]'><Instagram></Instagram></button>
                            </div>
                        </div>
                    </div>

                    <div className='md:col-span-2 sm:block hidden'>
                        <img src={footerImg} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;