

clickToShow = function(){
    $( "#idform" ).submit(function( event ) {
    grp = null;
    id = $("#subject_id").val().toString().replace(" ", "").replace("#", "");
    names = json["NAMES"]
    cnum = json["Candidate#"];
    inum = json["ID#"];
    for (var key in cnum) {
        if (cnum[key]){   
            if (cnum[key].includes(id)){
                grp = key;
                break
            }
        }
        if (inum[key]){ 
            if (inum[key].includes(id)){
                grp = key;
                break
            }
        }
    }
    $('#error').hide()
    $('.bold').show()
    if (grp){
        names = "N/A"
        fb = "N/A"
        if (json["NAMES"][grp]){
            names = json["NAMES"][grp].toString().replace(/,/g, ', ');
        };
        inums = "0";
        if(inum[grp]){
            inums = inum[grp].toString().replace(/,/g, ', ');
            if (cnum[grp]){
                inums += " // " +  cnum[grp].toString().replace(/,/g, ', ');
            }
        } else {
            inums = cnum[grp].toString().replace(/,/g, ', ');
        }
        title = json["TITLE"][grp]
        if(json["FEEDBACK"][grp]){
            fb = json["FEEDBACK"][grp].replace(/\\\\\//g, '/')
        }
        $('#title_s').text(title);
        $('#id_nums_s').text(inums);
        $('#names_s').text(names);
        $('#fb_s').text(fb);
    } else {
        $('.bold').hide()
        $('#error').show()
    }
    event.preventDefault();

});
};



json = '{"NAMES": {"0": "Evan Piermont", "1": "Jack Glover, Rahul Goyal, Adekunle Adekunbi", "2": "Mia Weston, Connor Taylor-Smith, Ahmed Sangar", "3": "Kyoko Au, Airidas Juodinis, Evgeny Prokofyev", "4": "Julia Jedrzejczyk, Alex Kamenov, Sabrina Zaman", "5": "Kieran Runganaikaloo, Sher Jamal Khan, Alexandra Gomes ", "6": "Amar Dulai, Elena Xi Yan Juan, Cristina Maria Nicolae", "7": "Andrew Buchanan, Dylan Nayee", "8": "Arsalan Mumtaz, Aroosa Hussain", "9": "Asjad Ajmal, Bharath Balendran, Mohammad Hussein Abdulrazak", "10": "Beth McLellan, Emma Cracknell, Nick Little", "11": "Raul Mehta, Bryan Chow", "12": "Daniel Santiago Sanchez, Jeyarutha Jeyakumar", "13": "Dewi Perrin, Temidayo Ogunde", "14": "Edward Salmon-Smith, Thomas Gibbs, Lucas Berger", "15": "Frederick Downham , Jordan Berry", "16": "Haashim Rana, Leon Raj Ravleen Batth ", "17": "Hari Chhabra, Luxshayan Balakumar, Muayid Abeidah", "18": "Harrison Beckett, Ryan Jalif", "19": "Joshua Phipps and Henry Green", "20": "Hisham Hayat, Zarak Toghey, Dhirvesh Hritik", "21": "THOMAS ENDRIS BEKURE, IMRAN JALAL,  YOUSAF JAMAL HUSSAIN", "22": "Joshua Wolff", "23": "Rula Al-Kubaisi and Jovana Micunovic", "24": "Kristy Tong", "25": "Lewis Dean", "26": "Lilia Marzougui", "27": "Lovely Balanza", "28": "Mack Finn-Kelcey", "29": "Yongda XIAO, Panos TSAKALIS, Shafie ALI", "30": "James Goddard, Rodrigo Quintana, Dylan Yahampath ", "31": "William Thomas, Sachmun Kohli", "32": "Samuel Llewellyn ", "33": "Xiaotong Qian, Xiaoxue Geng", "34": "Hamsa Ishaq, Haseeb Javed, Roopa Kapashi"}, "Candidate#": {"0": ["12345"], "1": [], "2": [], "3": [], "4": [], "5": [], "6": ["2211112", "2207332", "2209354"], "7": ["2210639", "2208086"], "8": [], "9": [], "10": ["2206072", "2207720", "2203834"], "11": ["2209311", "2201107"], "12": [], "13": [], "14": [], "15": [], "16": [], "17": [], "18": [], "19": [], "20": [], "21": [], "22": [], "23": [], "24": ["2204254"], "25": ["2203873"], "26": [], "27": [], "28": [], "29": ["2208634", "2202849", "2205139"], "30": [], "31": [], "32": ["2202069"], "33": [], "34": []}, "ID#": {"0": [], "1": ["100938787", "100911502", "100911957"], "2": ["100917176", "100919050", "100992794"], "3": ["100879004", "100915103", "100902755"], "4": ["100925146", "100914805", "100913283"], "5": ["100930917", "100939002", "100928646"], "6": ["100927015", "100938826", "100939381"], "7": ["100938816", "100938846"], "8": ["100916368", "100899149"], "9": ["100923627", "100939009", "100923091"], "10": ["100917484", "100916335", "100938729"], "11": [], "12": [], "13": ["100892106", "100931014"], "14": ["100938918", "100926415", "100923931"], "15": [], "16": ["100921869", "100918705", "100939029"], "17": ["100939095", "100917503", "100921233"], "18": [], "19": [], "20": ["100938903", "100923031", "100939054"], "21": ["100922129", "100915629", "100931147"], "22": ["100938850"], "23": [], "24": [], "25": [], "26": [], "27": ["100922232"], "28": [], "29": [], "30": ["100938728", "100939089", "100928369"], "31": ["100939025", "100938799"], "32": [], "33": ["100891536", "100907837"], "34": ["100925589", "100929305", "100917150"]}, "TITLE": {"0": "test2022", "1": "Investigating the relationship between areas with expensive houses and crime rate", "2": "What is the current growth in global carbon emissions? ", "3": "Do commercial banks target particular types of customers by opening their branches", "4": "How does household income affect student performance in secondary education and their chances for getting into higher education", "5": "\\u00a0THE EFFECT OF DISPOSABLE INCOME ON HOUSING MARKET IN THE UK\\u00a0", "6": "The Effect of Inflation on UK International Trade", "7": "\\u00a0The Effect of Inflation on the English Football Transfer Market\\u00a0", "8": "the relationship between crime and income levels", "9": "GDP and CO2 emmisions ", "10": "Women\'s education and the labour force. ", "11": "FTSE and Covid", "12": "Apple and Covid", "13": "To what extent has the improvement proposition (#EIP1559) to the Ethereum protocol affected circulating token supply.", "14": "Evaluating the relationship between the federal funds rate and the performance of the major US stock indexes", "15": "Since the 2008 Financial Crisis, has the Copper/Gold Ratio been an accurate indicator of \\u2018market fear\\u2019?", "16": "Has sector based government expenditure across 1990-2020 led to significant economic growth in Zimbabwe\\u2019s economy?", "17": "Does the distance from a tesla charging point influence house prices in SE England. ", "18": "Does changing oil prices have a causal effect on GDP growth.", "19": "Are there any traits in Bored Ape Yacht Club apes that affect the price? If so, which", "20": "Impact of KO/TKO percentage on pay per view buys in boxing", "21": null, "22": "wealth of an area and the quality of schooling", "23": "How do international coffee prices affect conflict intensity in Colombia?", "24": "Assessing the Impact of Covid-19 on Electricity Consumption in the UK", "25": "To what extent do economic indicators have an effect on divorce rates.", "26": "The association between smoking and lung cancer", "27": "To what extent did the 2008 Financial Crisis affected the UK\\u2019s economy?", "28": "How does average GCSE performance in state schools affect private school fees in a particular region?", "29": "What is the impact of lockdown measures on inflation in 2020 because of the COVID19 Pandemic? ", "30": "Assessing the relationship between the crypto and stock market returns", "31": "UK real-estate portfolio v UK based equity index fund", "32": "Assessing the impact on home advantage in the six nations rugby competition", "33": "Accessing the effect of COVID-19 on unemployment rate in UK", "34": "Analysing the link between COVID-19 cases and PM2.5 concentration in the air in Italy"}, "NOTES": {"0": null, "1": null, "2": null, "3": null, "4": null, "5": null, "6": null, "7": null, "8": null, "9": null, "10": null, "11": null, "12": "You need an ID number", "13": null, "14": null, "15": "You need an ID number", "16": null, "17": null, "18": "You need an ID number", "19": "You need an ID number", "20": null, "21": null, "22": null, "23": "You need an ID number", "24": null, "25": null, "26": "you need an ID number", "27": null, "28": "you need an ID number", "29": null, "30": null, "31": null, "32": null, "33": null, "34": null}, "FEEDBACK": {"0": "Test 2021", "1": "What level is the data? Neighboorhood, postcode, city? What kind of lag do you expect? Lots of good oppertunities for geo-spacial visualization. Where are you getting house price data from; you could probabl get this from web-srcapping similar to the homework. Can you look at different kinds of crime? I assume violent crime is the big driver. There is an obvious coorelation, but it would be interesting to see which one comes first? Can you exploit policy changes in crime reporting?", "2": "The topic is fine but the question might not lend itself to much analysis, although perhaps I am wrong, and you have a lot to do to calculate the growth rate (you could look at current trends in switching to renewables, population growth, etc; however this might be more a question for a class on climate modeling that python). Think about what kind of visualizations would be possible with this project? I guess there are lots of time series or geographic plots you can do. Perhaps, you could look at each country\'s per-capita emissions to calculate an index on how quickly we hit the max emissions with each country\'s current output? Will you calculate the change in temperature as a function of C02 yourself in python?", "3": "Very cool question! My only concern is how you will aquire the data: do you have a methodology to get the locations of the bank branches, and also the nearest supermarkets? Can you get this with the google maps API? Can you also look at time trends: for example when bank branches were opened. It could be that Tesco is choosing to be near a particular bank --- so perhaps causality runs the opposite way (or, more likely that that both banks and supermarkets engange in strategic placement and target similar variables). I would definatly also control for other neighborhood charecteristics, such as income and demographics to try and get at this, even if you cannot establish a temporal order. ", "4": "Seems like a good topic. How granular is the data? Can you see the enchachement area or which school students will go to? It would be interesting if you could look at income at the level of individua school (rather than something like council) but this data might not exist. You could get data on house prices as a proxy for income and this could be geographically specific. Think about what kind of visualizations this will yield. There are of course endogeniety issues, so it might pay to think about ways around this: can you look at changes in GCSE grading? Also can you look at the changes in university tuition, which likely had an outsized effect on poorer students: do you see a change in university enrolment that differs by geographic location as predicted by income?", "5": "What is disposable income; how does it differ from (total) income? I suspect housing costs would not factor into the definition, so in some sense there is an accounting relationship that prohibits any direct effect (if someone spends more on a house they have less disposable income by definition). At what level is the data avaiable? At the national level (i.e., if each obs is for the whole county) then I suspect there is not enough variation to really draw out a conclusion---it is likely that other economic factor matter much for for housing prices (intrest rates, inflation, employment, GBP exchange rate); in any case you should gather and control for these variables. Do you have information on who buys the houses: UK v foriegn, first v second home, etc? Can you exploit the change in GBP value following brexit---in real terms everyone in the UK lost 30% of thier income (but for foriegn investors, everything got cheaper). Think about what kind of visiualizations does this project can use? ", "6": "Although this is auxiliary to the execution of the project: Can you help a micro dude out and explain in more detail the relationship between inflation and trade? I am not too sure how they are supposed to theoretically fit together? Is there a well known model here that you are trying to test? I suppose the exchange rate would also have a large impact on the desirability of trade; can you also control for the exchange rate, seeing as there were large changes in the value of the pound over the last decade. Does inflation (or exchange rate) in the trading partner (i.e., the country trading with the UK) matter? Can you control for this as well, breaking down overall trade into trade with each country? Think about what kind of visualizations this project can use? How do you intend to establish causality: it could be that trade affects inflation (or that they two are jointly determined by other economic factors such as employment and interest rates)? At the least I would control for these variables, but perhaps you can exploit some natural exogenous variation such as brexit (a huge shock to free trade agreements and exchange rates) or other trade deals.", "7": "Very cool question! My only concern is how you will aquire the data: do you have a methodology to get the locations of the bank branches, and also the nearest supermarkets? Can you get this with the google maps API? Can you also look at time trends: for e", "8": "There are of course endogeneity issues: does crime beget low incomes or the other way around? Indeed it is unlikely that one completely determines the other: poorer people might commit more crimes and wealthier people might avoid living in high crime areas. It might pay to think about how to disentangle these causal channels: can you look\\u00a0 at different kinds of crime? I assume violent crime has more of an impact on the perception of a neighborhood than tax evasion. While there is an obvious correlation, it would be interesting to see which one comes first? Can you exploit policy changes in crime reporting? Have police, for example, decriminalized marajuana or similar resulting in less crime with little to no change in behavior? Can you look at incomes/property values on the boundary of high crime/low crime areas --- these should be less affected by crime in reality but the reporting will not reflect this so public perception might not cohere with actual crime stats. Do you see trends over time?", "9": "This is a reasonable question but I encourage you to think a bit more about the analysis. In particular, as countries have gotten richer (i.e., per capita GDP has increased) there has been a push towards green energy, but it\'s not so clear there is a causal link. It could be that the threat of climate change forces a movement towards green energy independently of the economic effect, it could be that the investment in green technology directly causes economic growth, etc. Try to think of a way of disentangling these different possibilities? Can you look at the effect on electricity production (by input type) during recessions or booms?\\u00a0 Can you identify causes of external variation such as EU or other multi-national regulations that would increase the investment in renewable energy. Can you see if international treaties (Paris accord, Kyoto protocol) had any effect; do you see a subsequent drop in emissions? Perhaps also look at emissions as scaled by total energy use as a measure of polluting to green technologies?", "10": "Seems like a good question. Is the data over time? It seems natural to examine this over a large time scale, creating a panel dataset. There are of course endogeneity issues, so it might pay to think about ways around this: have there been any policy changes in countries that have changed women\'s education opportunities? For example, can you examine when, in each country, women began going into university (or obtained the ability to vote, or some other proxy)? Does the dominant religion, or other similar social structures, play a role in determining the relationship? Can you look at the political institutions of the county: is there a higher relationship in democracies, for example? Think about what kind of visualizations this project can use. How does this square with fertility rates? What about the cost of education?", "11": "You have a solid tangible question and a reasonable approach to the data.\\u00a0 However, it might pay to think about a more intricate analysis. There is likely a strong correlation coronavirus rates and stock prices, so what else can you say besides a correlation coefficient? I like that you are thinking about examining specific sectors: it seems that not all industries would be equally affected. Can you push this break down further: Where is the driver of the change? Is it regional by infection or uniform across national boundaries (for example does the global case number has an effect on UK stocks, controlling for UK cases)? Is it driven by demand shocks or government shutdown mandates? Can you look at changes in valuation before and after government announcements of lockdowns? Does the effect seem responsive to lessening numbers or is it here to stay? Will the concurrent issues of Brexit muddle the analysis? Think about what kind of visualizations this project can use. ", "12": "I am not sure I really understand the question. Apple stock did not fall over the last two years. This is true and apparent from examining the stock price directly. So what is the analysis? Are you trying to understand why? This would, of course, require obtaining data on Apple\'s sales, revenue, and costs, which may be possible as it is a public company but I am not sure how. Many stocks, in particular technology stocks, did very well over the pandemic, which seems quite reasonable given that much work and human contact moved to digital spaces. It is worth pointing out that some of your background figures are wrong (US inflation in 2020 was not 6%, and high inflation did not hit until late 2021; the S&P500 went up over 2020\\u00a0 (although it did have a large temporary fall in the spring) etc). Perhaps it is better to think more generally about the relation between different sectors (such as technology) and the pandemic rather than on a specific stock.", "13": "Perhaps I am getting old, but I didn\'t really understand much of your hypothesis. This is okay, but in the final project please define things like \\"burn mechanism\\", \\"status quo net issuance\\", \\"proof of stake model\\" etc. If I understand correctly, at a high level, you want to see how a change in policy (in the implementation of ETH) affects the price of ETH. That seems like a good question and the data seems implementable. I would look at other outcomes (volume of transactions, etc).\\u00a0 I would also control for the price of other cryptocurrencies, as the price/growth of ETH is also affected by external factors such as popular demand for currency, economic factors, etc. Think about what kind of visualizations this project can use?", "14": "Seems like a straightforward question. Of course you might want to ask why does this relationship hold (theoretically) and is the relationship causal? In other words, what conditions lead to a change in the Fed\'s policy? Does this affect other stock markets (i.e., foreign ones?) Is the effect immediate upon announcement, or implementation, or slow and continuous? It seems like you have thought out the visualization and statistical parts of the project, that is good.", "15": "Seems like an interesting question; I have never thought about the copper/gold price ratio. It appears you have a good plan for getting the data. What, however, is your measure of market fear? I suspect the price of treasury bills is determined by many economic factors beyond market fear. Is there some other definition? I have heard of the volatility index. Also, what else affects commodity prices (perhaps supply, particular applications, trade issues, demand)? You would want to control for these additional factors. Think about what kind of visualizations this project can use. What about non-US markets? Does the exchange rate have any impact (since US treasury bills are denominated in dollars).\\u00a0", "16": "Seems like an interesting question; It appears you have a good plan for getting the data. There are, as always, some endogeneity issues, so it might pay to think about ways around this: could it be that increasing economic activity/growth leads to government surplus and thus spending? Can you see if the government spending was concentrated in particular municipalities and see if growth is different in different areas. Is it possible to see economic growth as indicated on a smaller scale (for instance growth related to education or healthcare, so that the link between govt exp is clearer). Perhaps you could also look at the average growth rate of comparable countries to control for global trends in growth. Are there any large scale shocks to exp from say outside investment or similar? Think about what kind of visualizations this project can use.", "17": "Super interesting question; the hard part will be gathering and cleaning the data. I think google maps API can search for specific things like charging points. The other issue is of course that causality might run the other direction --- tesla puts charging stations in areas of high income. Maybe you can find data on when the charging stations were installed, and use a difference in difference approach to see if local house prices increased after. This project has lots of opportunities for cool geo-spatial visualizations. Are there competing technology (other types of charging ports)?", "18": "There is definarly economic output data at finer than annual level: quarterly for sure but likely monthly for most large economies. This is a reasonable question but I encourage you to think a bit more about the analysis. In particular, as the economy increases (i.e., per capita GDP has increased) there might be a higher demand for oil which increases the price through traditional supply and demand---as such the causal direction is unclear: can you disentangle these? Perhaps by looking at exogenous shocks to the price of oil (wars and political crises usually shoot the price of oil up; fracking and new discoveries will bring it down). What about decreasing demand due to renewable energy? Think about what kind of visualizations this project can use.", "19": "The topic and data collection process seem reasonable (although, and I suppose I am getting out of touch, I am not totally sure I know what the topic is; these monkey picture NFT things?). However, I would encourage you to think a bit more about the analysis, as it is not clear how the current question lends itself to showcasing many of the other skills, beyond data collection, that we have learned in the course. For example, I am not sure what kind of visualizations would be possible (although, perhaps here I am wrong---you could categorical values such as\\u00a0 color against sale price in a bar graph?) Can you look at the time of sale, where it was made, what currency it was purchased in, etc? I suppose most of the work would be about categorizing the data as they seem to be presented in semi-unique strings that may not be comparable.", "20": "Cool question: I like the idea and that data. How are you going to collect data on knockouts? I would include more data: Knockouts, but also, total fights, percentage of wins, age, weight and even race of the boxer. Also time/day of week of the fight. Seems like you could create a more holistic picture of what drives boxing views. Also, I guess how much does the PPV cost. Also maybe if you have geographic data on who is purchasing the PPV. Lots of options here, which is good. Think about what kind of visualizations this project can use.", "21": "Seems like an interesting question; It appears you have a good plan for getting the data. There are, as always, some endogeneity issues, so it might pay to think about ways around this: could it be that increasing economic activity/growth leads to government surplus and thus spending? Can you see if the government spending was concentrated in particular municipalities and see if growth is different in different areas (London v elsewere or something). Is it possible to see economic growth in different sectors of the economy (for instance is spending related to education or healthcare more effective, or have differential effects). Perhaps you could also look at the average growth rate of comparable countries to control for global trends in growth. Are there any large scale shocks to exp from say outside investment / Brexit / covid / ressions? Think about what kind of visualizations this project can use.", "22": "Seems like a good topic. About the data: How granular are these regions? You specify GDP as a measure but GDP is calculated at the national level. Average income might be a better measure, or even house prices if you are intending to look at wealth. These could be found at a much more local level: city or council.\\u00a0 It would\\u00a0 even be interesting if you could look at income at the level of individual schools (rather than city) but this data might not exist. Could you use the catchment area as a small scale boundary and correlate it with income/wealth measures? Think about what kind of visualizations this will yield. There are of course endogeneity issues, since better schools might lead to more wealth creation and vice versa, so it might pay to think about ways around this: can you look at changes in Ofsted score, or GCSE grading or the similar policy change.", "23": "Great question. It seems like you have a reasonable plan to get the data. There are of course endogeneity issues: it could be that increases in prices lead to more incentive to control the means of production inciting conflict, or that conflict destroys production and therefore increases prices. Can you get around this by examining the price of coffee from other countries as well to control for local issues? It might also be worth examining other measures of conflicts, for example, number of murders or arrests, if you can find such data. Can you look at different regions and see if the effect is primarily in agricultural areas with high coffee production. ", "24": "Great question. It seems like you have a reasonable plan to get the data and how to analyze it and display it, so I do not have a ton extra to add. Perhaps you could try to control for the time of year (by examining the seasonal influence in other prior years). It would be interesting to know if the effect is direct from lockdowns or if people already were voluntarily spending more time at home (and less at work, on industrial uses). Towards this, you could control for the case/death rate of each time period. ", "25": "Great question. It seems like you have a reasonable plan to get the data and how to analyze it and display it, so I do not have a ton extra to add. I suppose I disagree with \\"Marriage is an important building block for a functioning society\\" but that is neither here nor there. Can you examine the effect of culture on this---divorce and marriage rate differ highly through time and across different cultures. Can you look at different countries with different views towards marriage. I would at the least control for the current marriage rate in the UK for each year. Do less people get married when the economy is bad as well (they break up earlier)? What about the rate of childbirth? It seems childbirth and marriage rates have been declining in the UK as it has gotten wealthier (this is a general trend in developed economies). Think about what kind of visualizations this project can use.", "26": "The topic, cancer rates and lifestyle choices, is okay. Is your data at the individual level or the national level (are you looking at population averages over time or individual outcomes of (smoking, cancer) pairs. I worry that as written, the question might not lend itself to much analysis: Data on both smoking rates and lung cancer incidence are readily available, so you do not need to do much work to get the data and your proposal seems to be a simple correlation. Perhaps you could examine, beyond smoking, which characteristics are most likely to contribute to cancer (weight, age, diet, pollution, gender, etc.). This would allow for a slightly more involved analysis on the same topic. Keep in mind that we are interested in statistical relationships and proving causation is much harder---nonetheless there are well understood causal links between smoking and lung cancer. When tailoring your analysis, think about what kind of visualizations this project can use.", "27": "While the general topic is okay, I am not sure I really understand the question. The financial crisis was *by definition* an effect on the economy, so I am not sure how you would disprove this with data---it is true by assumption. Further, I am not sure how the regression you have specified gets at the question since it seems more to be looking at if specific economic indicators are correlated with GDP. Perhaps a different route to analyse this question would be to calculate the level and growth rate (basically fit a time trend) for each economic variable from 2000-2007 and from 2010-2017 and test whether the level or slope of these trends differs. That is: did the crisis have a lasting change on specific indicators (or in econ-y terms, are we in a new equilibrium). ", "28": "Great question. It seems like you have a reasonable plan to get the data and how to analyze it, although I would also think about what kind of visualizations this project can use. Is the thinking behind the hypothesis that areas with better public schools will have less demand for private schools, thereby lowering the fees they can command? This is plausible but there is another force: wealthier areas will have more expensive schools and likely higher test scores. As such it seems imperative that you can control for the income/wealth of the area. Also, probably control for the competition (how far apart are these schools, how many private options exist).", "29": "Good question: I like the idea of looking across different countries. It seems a lot of the work will be in compiling the lockdown data into a usable format. Think about what kind of visualizations this project can use. I would perhaps include measures other than inflation as inflation seems likely tied to other political issues like the interest rate. So including the interest rate might help to control for variation caused by external issues.\\u00a0 If you find an effect, it would be interesting to know if the effect is direct from lockdowns or if people already were voluntarily spending more time at home (and less at work). Towards this, you could control for the case/death rate of each time period.", "30": "The question you ask is straightforward; this has both positives and negatives. It seems feasible to gather the requisite data, and scraping the data is a great way to show off some skills. I am sure there are plenty of ways to visualize the time series data. However, I encourage you to think about a slightly deeper analysis. You can show a correlation between two (or several) variables but then what? I encourage you to widen your view and try to use the data to investigate a more substantial question: Perhaps, trying to understand what are the underlying fundamentals that drive a common movement across both crypto and stocks v. those that have an idiosyncratic effect. It is well known that publicity (such as high profile tweets) has a remarkable effect on bitcoin valuations. Can you leverage this? Are there more traditional economic indicators which predict (or correlate, explain, etc) the crypto valuations? Do shocks to income (for example the covid stimulus checks) result in an immediate increase in bitcoin value? What about the existence of particular darkweb markets which, when shut down, could result in a decline in bitcoin value.", "31": "It seems like you have a reasonable plan to get the data and how to analyze it although I would think about what kind of visualizations this project can use. I am also slightly unsure about the question: are you trying to construct a portfolio of real estate assets that matches moments (i.e., mean, variance) to holding an index fund? Or are you trying to see which optimal portfolio is better? How do you construct a portfolio of real estate? I mean how do you choose which properties to include? It strikes me that most of the work here will come in the form of data collection and cleaning, which is okay.", "32": "Cool question. It seems that the analysis will be pretty straightforward, but this is made up for with a rather elaborate data collection process (scraping wiki). You should think about what kind of visualizations this project can use. I would perhaps also control for/include other aspects such as distance between home and away locations, weather, time of year, if the teams are from a country that speaks the same language, etc.", "33": "It seems like you have a reasonable plan to get the data and how to analyze it and display it, so I do not have a ton extra to add. Think about what kind of visualizations this project can use.It makes sense to try to control for the time of year (by examining the seasonal influence in other prior years). It would be interesting to know if the effect is direct from lockdowns or jobs were already being lost through decreased demand. It would also be nice to see the effect of the furlough scheme (called Coronavirus Job Retention Scheme) the UK government put in place to keep people employed. Perhaps you could compare UK unemployment to US unemployment where no such scheme existed. Or look at what happened to unemployment when the scheme came to an end. ", "34": "Good question. It seems like you have a reasonable plan to get the data and how to analyze it. Think about what kind of visualizations this project can use. Is it possible that air pollution affected covid cases (or at least those that were severe enough to be reported) by deteriorating respiratory heath? Is there a way to disentangle this? Is there a natural regional/seasonal variation in pollution? You could calculate this by examining the trend in non-covid years and using this as a control. Can you figure out the link, if there is an effect: is it driven by automobiles, industry, electricity production?"}}'
json = JSON.parse(json)
document.addEventListener("DOMContentLoaded", clickToShow);

