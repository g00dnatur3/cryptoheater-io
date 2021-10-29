import React, { FC, useState, useEffect, useRef } from 'react';
import { headerStyle, contentStyle } from '../styles'
import { Alert, Spinner, Button } from 'reactstrap';
import {loadSettings, saveSettings} from '../../helpers/ApiHelper'
import { Pool } from '@material-ui/icons';

// tslint:disable-next-line: variable-name
export const Home: FC<{}> = () => {

  let titleFontSize
  let contentFontSize
  let imageWidth
  if (screen.width < 500) {
    imageWidth = screen.width * 0.9
    titleFontSize = 22
    contentFontSize = 18
  } else {
    imageWidth = 550
    titleFontSize = 40
    contentFontSize = 22
  }

  return (<div style={{
    paddingLeft: '2.2%',
    paddingRight: '2.2%',
    backgroundColor: 'IVORY',
    border: '0px solid RED',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  }}>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '1rem',
        paddingTop: '1rem',
        
      }}>
        <img src="/favicon.ico" style={{paddingRight: 2, width: titleFontSize, height: titleFontSize, marginBottom: 5}} />
        <div style={{ fontSize: titleFontSize, color: 'dimgrey', fontWeight: 700 }}>C R Y P T O H E A T E R . I O</div>
      </div>


      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '1rem',
        paddingTop: 0,
        fontSize: contentFontSize
      }}>

        <div>
        <pre>
        Super efficient space heater
        </pre>
    
        <pre>
        Easy-to-use crypto miner
        </pre>

        <pre>
        In one package
        </pre>

        </div>

      </div>

      <div>
        <img style={{width: imageWidth, border: '1px solid ', borderRadius: 10}} src="/images/4.jpeg" />
      </div>

      <div style={{paddingTop: '1rem'}} />

      <div>
        <img style={{width: imageWidth, border: '1px solid ', borderRadius: 10}} src="/images/3.jpeg" />
      </div>

      <div style={{paddingTop: '1rem'}} />

      <div>
        <img style={{width: imageWidth, border: '1px solid ', borderRadius: 10}} src="/images/8.jpeg" />
      </div>

      <div style={{paddingTop: '1rem'}} />

      <div>
        <img style={{width: imageWidth, border: '1px solid ', borderRadius: 10}} src="/images/1.jpeg" />
      </div>

      <div style={{paddingTop: '1rem'}} />

      <div>
        <img style={{width: imageWidth, border: '1px solid ', borderRadius: 10}} src="/images/6.jpeg" />
      </div>

      <div style={{paddingTop: '1rem'}} />

      <div>
        <img style={{width: imageWidth, border: '1px solid ', borderRadius: 10}} src="/images/2.jpeg" />
      </div>

      <div style={{paddingTop: '1rem'}} />

      <div>
        <img style={{width: imageWidth, border: '1px solid ', borderRadius: 10}} src="/images/7.jpeg" />
      </div>

      <div style={{paddingTop: '1rem'}} />

      <div>
        <img style={{width: imageWidth, border: '1px solid ', borderRadius: 10}} src="/images/5.jpeg" />
      </div>

      <div style={{paddingTop: '1rem'}} />
      
      <video
            id="my-video"
            className="video-js"
            controls
            preload="metadata"
            width={imageWidth*0.8}
            data-setup="{}"
          >
            <source src="/video.mp4#t=0.1" type="video/mp4"/>
            <p className="vjs-no-js">
              To view this video please enable JavaScript, and consider upgrading to a
              web browser that
              <a href="https://videojs.com/html5-video-support/" target="_blank"
                >supports HTML5 video</a
              >
            </p>
      </video>

      <script src="https://vjs.zencdn.net/7.7.5/video.js"></script>

      <div style={{paddingTop: '2rem'}} />

      <pre style={{fontSize: contentFontSize-4}}>
        Interested in buying one?
      </pre>
      <pre style={{fontSize: contentFontSize-4}}>
        Contact <a href="mailto:g00dnatur3@gmail.com">g00dnatur3@gmail.com</a>
      </pre>

      <div style={{paddingTop: '2rem'}} />


  </div>)
}