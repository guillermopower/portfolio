import { createSlice } from '@reduxjs/toolkit';
import URL from '../../common/types/url-types';
import { TimelineState } from './timelime-types';

const initialState: TimelineState = {
  steps:
  [
    {
      content: [
        'Hibrid position, Designed to Global Processing client, we build robust backend services for payment processing.',
        'Build innovative functionality to process millions of transactions per day.',
        'Worked alongside a 10+ people team.',
      ],
      header: 'May 2024 - Present',
      title: {
        position: 'Ssr Backend developer',
        company: {
          name: 'BDT Global',
          url: URL.BDTGLOBAL,
        },
      },
    },
    {
      content: [
        'Building robust, secure and sophisticated frontend applications and APIs for gaming users. (Betonline)',
        'Worked alongside a 15+ people team.',
        'Some technologies used: Asp Classic, Javascript, SQL Server.',
      ],
      header: 'September 2022 - April 2024',
      title: {
        position: 'Sr Backend developer',
        company: {
          name: 'Paramo',
          url: URL.PARAMO,
        },
      },
    },
    {
      content: [
        'I worked on the development of an entire food order system, using a microservices architecture.',
        'Worked alongside a 3 people team.',
        'Some technologies used: Net Core, MongoDb, SQL, Angular 13+, Grpc, Microservices.',
      ],
      header: 'October 2017 - November 2019',
      title: {
        position: 'Backend Developer',
        company: {
          name: 'Siblings Software',
          url: URL.SIBLINGS_SOFTWARE,
        },
      },
    },
  
    {
      content: [
        'Building crm application for internal client, doing better and more productive the technical visits to customers.',
        'Worked alongside a 15+ people team.',
        'Some technologies used: Net Core, Vue JS, Javascript, Oracle.',
      ],
      header: 'October 2019 - March 2021',
      title: {
        position: 'Sr Fullstack developer',
        company: {
          name: 'Telecentro',
          url: URL.TELECENTRO,
        },
      },
    },
    {
      content: [
        'I worked for clients such as DTV Peru, DTV Argentina, Isban Chile, where I participated in the migration of technology from banking to companies. applying agile methodologies and best practices in software development such SOLID.',
        'Worked alongside a 15+ people team.',
        'Some technologies used: Net Core, Angular JS, Javascript, SQL Server.',
      ],
      header: 'October 2018 - October 2019',
      title: {
        position: 'Sr Fullstack developer',
        company: {
          name: 'Neoris',
          url: URL.NEORIS,
        },
      },
    },
    {
      content: [
        'I worked on various robust and performant solutions for financial, credit and administrative processes. ',
        'Also i participated in the functional analysis for new modules and maintenance of existing applications.',
        'Some technologies used: C#, Asp Net, Bootstrap, SQL Server.',
      ],
      header: 'Feb 2018 - October  2018',
      title: {
        position: 'Full Stack Developer',
        company: {
          name: 'Cartasur',
          url: URL.CARTASUR,
        },
      },
    },
    {
      content: [
        'I worked on in a dashboard for monitoring and analyzing cereals production, prices, futures using WPF for desktop application.',
        'Also i participated in the functional analysis for new modules and maintenance of existing applications.',
        'Some technologies used: WPF, DevExpress, C#, Asp Net, Bootstrap, SQL Server.',
      ],
      header: 'Jun 2016 - Feb 2018',
      title: {
        position: 'Full Stack Developer',
        company: {
          name: 'Garfinagro',
          url: URL.GARFINAGRO,
        },
      },
    },
    {
      content: [
        'I did corrective and evolve maintenance for the greater medical portal in spanish language.',
        'Also i created new plugins and widgets for different interactions between users and the portal.',
        'Some technologies used: ASP Net, C#, Javascript, bootstrap, jquery, ajax, SQL Server',
      ],
      header: 'Jun 2012 - Jun 2016',
      title: {
        position: 'Full Stack Developer',
        company: {
          name: 'Medcenter Solutions',
          url: URL.MEDCENTER_SOLUTIONS,
        },
      },
    },
  ],
};

const componentReducer = createSlice({
  name: 'timeline',
  initialState,
  reducers: {},
});

export default componentReducer.reducer;
