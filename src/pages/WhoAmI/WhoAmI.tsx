/* eslint-disable max-len */
import React, { useRef } from 'react';
import Button from '../../common/components/Button/Button';
import Link from '../../common/components/Link/Link';
import { LinkTypes } from '../../common/components/Link/link-types';
import useIntersectionObserver from '../../common/hooks/useIntersectionObserver';
import useVisiblePage from '../../common/hooks/useVisiblePage';
import { Page } from '../../common/reducers/visible-page/visible-page-types';
import Title from '../../components/Title/Title';

const WhoAmI = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useVisiblePage(ref, Page.WHOAMI);
  const animationEntry = useIntersectionObserver(ref, { freezeOnceVisible: true });

  return (
    <div ref={ref} className='whoami'>
      <div className='whoami__container'>
        <Title title='About me' subtitle='~: whoami' />
        <p>
          Hi! My name is <b>Guillermo</b>, I build web stuff. I have over 17 years experience in desktop and web development, some mobile using Angular and Ionic and programming more generally.
        </p>
        <p>
          I&apos;ve worked in many diferent positions, in huge corporations and in small companies but my goal has always been the same: to bridge the gap between <b>code</b> and <b>design</b>. If this site got your attention then feel free to contact me.
        </p>
        <Link href='mailto:guillermor1977@hotmail.com' type={LinkTypes.BUTTON}>
          <Button label='Contact me!' />
        </Link>
      </div>
      <div className='whoami__moving-border' data-animate={animationEntry?.isIntersecting}>
        <div className='whoami__concept whoami__concept--design'>FrontEnd</div>
        <div className='whoami__concept whoami__concept--coding'>BackEnd</div>
      </div>
    </div>
  );
};

export default WhoAmI;
