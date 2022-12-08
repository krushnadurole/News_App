import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {


    articles = [
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Biden raises human rights, Xi warns of Taiwan 'red line' in three hour talk - Reuters",
            "description": "U.S. President Joe Biden pressed his Chinese counterpart on Beijing's human rights practices, <a href=\"https://www.reuters.com/world/china/hours-talk-little-change-after-biden-xi-virtual-meeting-2021-11-16/\" target=\"_blank\">in an over three-hour call</a> on M…",
            "url": "https://www.reuters.com/world/biden-raised-concerns-over-xinjiang-tibet-hong-kong-xi-warns-taiwan-red-line-2021-11-16/",
            "urlToImage": "https://www.reuters.com/resizer/5GmymfViv7GM7ZTnt_VXUf9Qzfs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F763ZUIHVJKUBE4RMEX3ERUAIA.jpg",
            "publishedAt": "2021-11-16T07:49:00Z",
            "content": "A screen shows Chinese President Xi Jinping attending a virtual meeting with U.S. President Joe Biden via video link, at a restaurant in Beijing, China November 16, 2021. REUTERS/Tingshu WangWASHINGT… [+4788 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "JP Morgan sues EV maker for $162 MN over warrants | Tesla | WION | World Business Watch | World News - WION",
            "description": "JPMorgan Chase & Co on Monday sued Tesla for $162.2 million, accusing Elon Musk's electric car company of \"flagrantly\" breaching a contract related to stock ...",
            "url": "https://www.youtube.com/watch?v=UVuqZdsuXe4",
            "urlToImage": "https://i.ytimg.com/vi/UVuqZdsuXe4/maxresdefault.jpg",
            "publishedAt": "2021-11-16T06:01:06Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "Tyler Sullivan",
            "title": "49ers vs. Rams score: Deebo Samuel scores twice as San Francisco crushes L.A. to spoil Odell Beckham's debut - CBSSports.com",
            "description": "San Francisco moves to 4-5 on the season and the Rams drop to 7-3",
            "url": "https://www.cbssports.com/nfl/news/49ers-vs-rams-score-deebo-samuel-scores-twice-as-san-francisco-crushes-l-a-to-spoil-odell-beckhams-debut/live/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2021/11/16/c28dec2d-53a3-428a-b256-db7dee571036/thumbnail/1200x675/652d7321aa101ec574312d8966eb2e81/new-team.jpg",
            "publishedAt": "2021-11-16T05:09:12Z",
            "content": "For the first time in 393 days, the San Francisco 49ers have won a game at home. This latest victory comes in the form of a 31-10 rout against the Los Angeles Rams on \"Monday Night Football.\" Out of … [+6384 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Los Angeles Times"
            },
            "author": "Richard Winton",
            "title": "Vanessa Bryant must turn over therapy records in Kobe crash case, judge rules - Los Angeles Times",
            "description": "Vanessa Bryant must turn over therapy records to L.A. County in her lawsuit for  severe emotional distress after learning deputies and firefighters shared images of a helicopter crash scene",
            "url": "https://www.latimes.com/california/story/2021-11-15/vanessa-bryant-must-turn-over-therapist-records-since-2017-judge-rules-in-copter-crash-photos-lawsuit",
            "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/ae399f8/2147483647/strip/true/crop/2048x1075+0+0/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F9f%2Fc5%2Ffe9f8eed401fb5cb3cd1913fb31f%2Fbryant1.png",
            "publishedAt": "2021-11-16T04:43:00Z",
            "content": "Vanessa Bryant must turn over her therapy records to Los Angeles County in her lawsuit claiming she suffered severe emotional distress after learning that deputies and firefighters had shared images … [+3217 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Paul LeBlanc, CNN",
            "title": "Casper Star-Tribune: Wyoming GOP votes to no longer recognize Liz Cheney as a party member - CNN",
            "description": "The Wyoming Republican Party voted over the weekend to no longer recognize Rep. Liz Cheney as a member of the party, the Casper Star-Tribune reported, a new instance of GOP blowback as Cheney continues to speak out against former President Donald Trump.",
            "url": "https://www.cnn.com/2021/11/15/politics/wyoming-gop-liz-cheney/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211109212436-liz-cheney-1109-super-tease.jpg",
            "publishedAt": "2021-11-16T04:28:00Z",
            "content": "Washington (CNN)The Wyoming Republican Party voted over the weekend to no longer recognize Rep. Liz Cheney as a member of the party, the Casper Star-Tribune reported, a new instance of GOP blowback a… [+2355 chars]"
        },
        {
            "source": {
                "id": "financial-times",
                "name": "Financial Times"
            },
            "author": null,
            "title": "Latest news updates: Temasek ramps up agtech investment in Singapore food security push - Financial Times",
            "description": "News, analysis and comment from the Financial Times, the worldʼs leading global business publication",
            "url": "https://www.ft.com/content/523969b3-b785-4a20-aa5b-74c9cf9c57fe",
            "urlToImage": null,
            "publishedAt": "2021-11-16T04:21:12Z",
            "content": "Expert insights, analysis and smart data help you cut through the noise to spot trends,\r\nrisks and opportunities.\r\nJoin over 300,000 Finance professionals who already subscribe to the FT."
        },
        {
            "source": {
                "id": null,
                "name": "Akron Beacon Journal"
            },
            "author": "Dan Kadar, Akron Beacon Journal",
            "title": "Odell Beckham Jr. did little in Los Angeles Rams debut after release by Cleveland Browns - Akron Beacon Journal",
            "description": "Odell Beckham Jr. pushed his way off the Cleveland Browns in hopes of getting more opportunity. He didn't get much of one in his Rams debut.",
            "url": "https://www.beaconjournal.com/story/sports/pro/browns/2021/11/15/odell-beckham-jr-non-factor-rams-debut-after-release-browns/8633776002/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2021/11/16/NABJ/f0b4ee3d-db4a-4e2e-9c6d-d67b32522902-AP21320032569269.jpg?auto=webp&crop=5089,2863,x0,y258&format=pjpg&width=1200",
            "publishedAt": "2021-11-16T04:17:04Z",
            "content": "It took exactly one play for the Los Angeles Rams to get Odell Beckham Jr. involved in their offense.\r\nPlaying on ESPN's \"Monday Night Football\" against the San Francisco 49ers, the former Browns rec… [+4445 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Pff.com"
            },
            "author": "Nathan Jahnke",
            "title": "Immediate fantasy football takeaways from NFL Week 10 Monday Night Football | Fantasy Football News, Rankings and Projections - Pro Football Focus",
            "description": "The San Francisco 49ers beat the Los Angeles Rams 31-10 on Monday Night Football. PFF's Nathan Jahnke offers snap counts, immediate fantasy football takeaways and more following the 49ers' victory.",
            "url": "https://www.pff.com/news/fantasy-football-immediate-takeaways-nfl-week-10-monday-night-football-san-francisco-49ers-los-angeles-rams",
            "urlToImage": "https://media.pff.com/2021/11/USATSI_17172001_168395514_lowres.jpg?w=956&h=538",
            "publishedAt": "2021-11-16T04:11:39Z",
            "content": "The San Francisco 49ers defeated the Los Angeles Rams 31-10 on Monday Night Football. The 49ers started the game with two 90-plus-yard drives that ended in touchdowns while the Rams started their fir… [+3467 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Patrick Reilly",
            "title": "Strange moments from closing arguments of Rittenhouse murder trial - New York Post ",
            "description": "Kyle Rittenhouse’s dramatic murder trial wrapped up on Monday as the lengthy closing statements by attorneys featured some strange moments.",
            "url": "https://nypost.com/2021/11/15/strange-moments-from-closing-arguments-of-rittenhouse-trial/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/11/strange-rittenhouse-trial-moments-index.jpg?quality=90&strip=all&w=1024",
            "publishedAt": "2021-11-16T04:11:00Z",
            "content": "Kyle Rittenhouses dramatic murder trial wrapped up on Monday as the lengthy closing statements by attorneys featured some strange moments. \r\nA verdict is expected tomorrow following jury deliberation… [+3050 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Acpjournals.org"
            },
            "author": null,
            "title": "Influenza Vaccine Uptake and Missed Opportunities Among the Medicare-Covered Population With High-Risk Conditions During the 2018 to 2019 Influenza Season: A Retrospective Cohort Study: Annals of Internal Medicine: Vol 0, No 0 - Annals of Internal Medicine",
            "description": "Background: Seasonal influenza causes substantial morbidity and mortality among older U.S. adults and those with comorbid health conditions. Objective: To describe seasonal influenza vaccine uptake and identify factors associated with missed opportunities for…",
            "url": "https://www.acpjournals.org/doi/10.7326/M21-1550",
            "urlToImage": "https://www.acpjournals.org/na101/home/literatum/publisher/acp/journals/content/aim/0/aim.ahead-of-print/m21-1550/20211111/images/aime202201180-m211550_visual-abstract.png",
            "publishedAt": "2021-11-16T04:02:22Z",
            "content": "Affiliations: National Center for Immunization and Respiratory Diseases, Centers for Disease Control and Prevention, Atlanta, Georgia (B.C., C.W., Y.T., R.K.).\r\nDisclaimer: The findings and conclusio… [+1744 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Mike Murphy",
            "title": "Elon Musk exercises options, sells another $930 million in Tesla stock - MarketWatch",
            "description": "CEO has sold $7.8 billion in stock over the past week as shares have sunk",
            "url": "https://www.marketwatch.com/story/elon-musk-exercises-options-sells-another-930-million-in-tesla-stock-11637034597",
            "urlToImage": "https://images.mktw.net/im-435700/social",
            "publishedAt": "2021-11-16T03:49:00Z",
            "content": "Elon Musk continues to unload Tesla Inc. stock, exercising his options and selling another $930 million in shares Monday after dumping $6.9 billion in stock last week.According to filings Monday with… [+1251 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": "Adam Cancryn, Erin Banco, Sarah Owermohle",
            "title": "Moderna nears deal to pledge more vaccines to lower-income countries - POLITICO",
            "description": "After much criticism, the vaccine maker is close to an agreement to provide doses at a lower price to the global vaccine equity initiative.",
            "url": "https://www.politico.com/news/2021/11/15/moderna-vaccines-lower-income-countries-522673",
            "urlToImage": "https://static.politico.com/31/27/9a8d40904e56b5c06b60d93c0203/211115-moderna-vaccine-getty-773.png",
            "publishedAt": "2021-11-16T02:11:48Z",
            "content": "Officials are pressing Moderna to deliver those Covid-19 shots to COVAX through September 2022, a target that would dovetail with the White House's goal of vaccinating 70 percent of the world by the … [+4779 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Julius Young",
            "title": "Astroworld tragedy: Travis Scott, Kylie Jenner 'devastated,’ rapper in ‘constant state of shock’: source - Fox News",
            "description": "Travis Scott is still reeling in the aftermath of the 2021 Astroworld tragedy in Houston, Texas, that left 10 dead, including a 9-year-old boy.",
            "url": "https://www.foxnews.com/entertainment/astroworld-tragedy-travis-scott-kylie-jenner-devastated",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/11/Kylie-Jenner-Travis-Scott-Somber_Getty.jpg",
            "publishedAt": "2021-11-16T01:42:57Z",
            "content": "EXCLUSIVE:Travis Scott is still reeling in the aftermath of the 2021 Astroworld tragedy in Houston, Texas, that left 10 dead, including a 9-year-old boy. Since the devastating incident, the rapper ha… [+5530 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Catie Keck",
            "title": "IATSE members vote to ratify contracts that include better streaming pay - The Verge",
            "description": "IATSE, a major Hollywood union, has voted to ratify a pair of contracts to improve labor conditions for production workers — though narrowly — after previously voting to authorize a strike over stalled negotiations with major studios.",
            "url": "https://www.theverge.com/2021/11/15/22784345/iatse-members-ratify-contracts-following-strike-authorization",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/WZQL9LQ0S-VyVVbXR0hxu7gOh6o=/0x573:4000x2667/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23017629/1236517234.jpg",
            "publishedAt": "2021-11-16T01:29:57Z",
            "content": "The union had previously threatened to strike\r\nA major Hollywood union has voted to ratify a pair of contracts to improve labor conditions for production workers though narrowly after previously voti… [+2544 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WSBT-TV"
            },
            "author": "FARNOUSH AMIRI Associated Press",
            "title": "Bannon indictment defies history of Congress' contempt power - WKRC TV Cincinnati",
            "description": "WASHINGTON (AP) &mdash; Steve Bannon's indictment on contempt of Congress charges is the nation's first since 1983, and his appearance in federal court Monday  provides a rare glimpse into one of U. S. lawmakers' politically messiest and least-used powers. Th…",
            "url": "https://wsbt.com/news/nation-world/bannon-indictment-defies-history-of-congress-contempt-power",
            "urlToImage": "https://static-22.sinclairstoryline.com/resources/media/2cc5aba3-5298-44d1-ab25-ed4d781c2fd6-large16x9_AP21319549484055.jpg?1637023758615",
            "publishedAt": "2021-11-16T00:57:15Z",
            "content": null
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Amanda Coletta, Claire Parker",
            "title": "British Columbia: Floods and landslides trap people on highway - The Washington Post",
            "description": "An Environment Canada meteorologist said the amount of rainfall over the past 24 to 36 hours in some locations has exceeded some monthly totals for November — typically the wettest month.",
            "url": "https://www.washingtonpost.com/world/2021/11/15/canada-floods-british-columbia/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/L6JP72CGG4I6ZPWKHTDRAO6YCQ.jpg&w=1440",
            "publishedAt": "2021-11-16T00:55:14Z",
            "content": "Landslides trapped as many as 100 vehicles on Highway 7 overnight, a scenic route running east of Vancouver, Mike Farnworth, the provinces public safety minister, told reporters on Monday. People stu… [+5362 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Joey Roulette",
            "title": "Russian Anti-Satellite Weapon Test Debris Forces Astronauts to Shelter - The New York Times",
            "description": "The State Department said the cloud of debris from the missile strike added more than 1,500 pieces of sizable space junk to Earth’s orbit.",
            "url": "https://www.nytimes.com/2021/11/15/science/russia-anti-satellite-missile-test-debris.html",
            "urlToImage": "https://static01.nyt.com/images/2021/11/15/science/15SPACEJUNK/15SPACEJUNK-facebookJumbo.jpg",
            "publishedAt": "2021-11-16T00:25:54Z",
            "content": "Russian authorities filed airspace notices on Monday warning airplanes to avoid the Plesetsk launch site roughly 650 miles north of Moscow. It is the same location where an earlier Russian antisatell… [+2027 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Halo Infinite Multiplayer Surprise Released Early - IGN Daily Fix - IGN",
            "description": "On today's IGN The Fix: Games, Halo Infinite's free multiplayer mode has been released early - it's available now on PC, Xbox Series X/S, and Xbox One.Head o...",
            "url": "https://www.youtube.com/watch?v=xtK2Ol7Q24Y",
            "urlToImage": "https://i.ytimg.com/vi/xtK2Ol7Q24Y/hqdefault.jpg",
            "publishedAt": "2021-11-16T00:19:01Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "WDIV ClickOnDetroit"
            },
            "author": "Priya Mann, Kayla Clarke",
            "title": "University of Michigan flu surge: Expert weighs in on what’s happening, what can be done - WDIV ClickOnDetroit",
            "description": "A team of investigators is headed to Ann Arbor to analyze the spread of the flu following a major flu surge on campus.",
            "url": "https://www.clickondetroit.com/all-about-ann-arbor/2021/11/16/university-of-michigan-flu-surge-expert-weighs-in-on-whats-happening-what-can-be-done/",
            "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/arc-cf/11-15-2021/t_b6b2b1269142424d9010616993fe9931_name_image.jpg?_a=ATABlcW0",
            "publishedAt": "2021-11-16T00:14:19Z",
            "content": "ANN ARBOR, Mich. A team of investigators is headed to Ann Arbor to analyze the spread of the flu following a major flu surge on campus.\r\nEmily Martin is an associate professor of epidemiology. She sa… [+1366 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KABC-TV"
            },
            "author": null,
            "title": "COVID in LA: Cases, hospitalizations in Los Angeles County tick upward again - KABC-TV",
            "description": "COVID-19 hospitalizations in Los Angeles County ticked upward again as health officials encouraged people to get vaccinated.",
            "url": "https://abc7.com/covid-cases-in-la-coronavirus-los-angeles-cdc-map-transmission/11240359/",
            "urlToImage": "https://cdn.abcotvs.com/dip/images/11240357_111521-kabc-covid-monday-img.jpg?w=1600",
            "publishedAt": "2021-11-16T00:06:23Z",
            "content": "LOS ANGELES (CNS) -- COVID-19 hospitalizations in Los Angeles County ticked upward again as health officials encouraged people to get vaccinated, again warning that unvaccinated residents are far mor… [+2553 chars]"
        }
    ]





























    // static defaultProps = {
    //     country: PropTypes.string,
    //     pagesize: PropTypes.number
    //     // category:PropTypes.string
    // };
    // static propTypes = {
    //     country: 'in',
    //     pagesize: 5,
    //     // category:"general"
    // };
    static defaultProps = {
        country: 'in',
        pagesize: 5,
        // category:PropTypes.string
    };
    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number
        // category:"general"
    };
    //  let {pagesize} = this.this.props;
    constructor() {
        super();
        // console.log("hello guys how are you ");
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1

        }

    }

    async componentDidMount() {
        this.setState({ loading: true });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f8bf6114cf6344e399a4cd647848a97f&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
        this.setState({ loading: false });
    }
    handlepreviousclick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f8bf6114cf6344e399a4cd647848a97f&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
            // loading: false
        })
        this.setState({ loading: false });
    }
    handlenextclick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f8bf6114cf6344e399a4cd647848a97f&page= ${this.state.page + 1}&pagesize=${this.props.pagesize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json();

            // console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
                // loading: false
            })
            // this.state.loading=false;
            this.setState({ loading: false });
        }


    }

    //    so the sequence of the execution of the blocks are : 
    //    first : constructor
    //    second: render 
    //    third : componentDidMount
    render() {
        return (
            <div className="container my-3">
                {/* style={{marginTop:'40px'}} */}
                {/* <h1 >NewItem - Top headlines. </h1> */}
                <u></u>
                <h1 style={{textTransform:"uppercase",fontFamily:"Cormorant SC"}}>{this.props.category} </h1>

                {this.state.loading && < Spinner />}

                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title !== 0 ? element.title.slice(0, 44) : ""} description={element.description ? element.description.slice(0, 88) : ""}
                                imageurl={element.urlToImage} newsurl={element.url} author={element.author != null ? element.author : "unknown"}
                                publishedAt={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                    {/* {!(this.state.loading) && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title !== 0 ? element.title.slice(0, 44) : ""} description={element.description ? element.description.slice(0, 88) : ""}
                                imageurl={element.urlToImage} newsurl={element.url} author={element.author != null ? element.author : "unknown"}
                                publishedAt={element.publishedAt} source={element.source.name} />
                        </div>
                    })} */}

                </div>
                <div class="d-flex justify-content-around">
                    <button disabled={true ? this.state.page <= 1 : false} class="btn btn-success btn-lg" type="button" onClick={this.handlepreviousclick}>&laquo; Previous</button>
                    <button disabled={true ? this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize) : false} class="btn btn-success btn-lg" type="button" onClick={this.handlenextclick}>Next &raquo;</button>
                </div>

            </div>
        )
    }
}

export default News
