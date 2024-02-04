import { Box, Paper, Typography } from '@mui/material';
import React, { useState, useCallback, useEffect } from 'react';
import { axiosInstance } from '../../axios/axios';
import '@fontsource/mulish';
import '@fontsource/happy-monkey';
import '@fontsource/cinzel';

function Home() {
  const [info, setInfo] = useState([]);

  const getData = useCallback(async () => {
    try {
      const { data } = await axiosInstance('/data/get');
      if (data?.success) {
        setInfo(data?.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Box
      height='100vh'
      width='100%'
      sx={{
        background: '#f1f7c6',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography
        sx={{
          margin: '50px',
          textAlign: 'center',
          fontWeight: 600,
          fontFamily: 'happy monkey',
          color: '#603f70',
        }}
        variant='h3'
      >
        Welcome to the home page! This is a sample website!!!
      </Typography>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          overflow: 'scroll',
          flexDirection: 'column',
          alignItems: 'center',
          '&::-webkit-scrollbar':{
            display:'none'
          }
        }}
      >
        {info.length !== 0 ? (
          info.map((data) => (
            <Paper
              key={data?._id}
              sx={{
                width: '80%',
                margin: '10px',
                background: '#f1e4f7',
                textAlign: 'center',
                padding: '20px',
              }}
            >
              <Typography
                variant='h4'
                sx={{
                  fontFamily: 'cinzel',
                  letterSpacing: '3px',
                }}
              >
                {data?.name}
              </Typography>
              <Typography variant='subtitle1' sx={{ fontFamily: 'mulish' }}>
                {data?.description}
              </Typography>
            </Paper>
          ))
        ) : (
          <Typography variant='h3'
            sx={{
              fontFamily: 'happy monkey',
              color: '#603f70',
            }}
          >loading...</Typography>
        )}
      </Box>
    </Box>
  );
}

export default Home;
