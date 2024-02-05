const MainContent = () => {
  return (
    <div id="mainContent">
        <h2 id="introTitle">Introduction</h2>
        <div id="intro">
            <p>Crocheting is a way to create things from yarn. You can make anything from simple coasters to elaborate dresses, in any color yarn can be dyed in. There are a variety of stitches of varying complexity, all of which are done with a ball of yarn and a crochet hook. Depending on the size of your hook and the weight of your yarn, the things you make may vary in size.</p>
        </div>
        <h2 id="stitchTitle">Common Stitches</h2>
        <div id="stitches">
            <div>
                <h3>Slip stitch</h3>
                <p>Insert the hook into the next stitch, yarn over, and pull through the stitch and the active loop on the hook.</p>
            </div>
            <div>
                <h3>Single crochet</h3>
                <p>Insert hook into the next stitch, yarn over, and pull up a loop. Then, yarn over again and pull through both loops on the hook.</p>
            </div>
            <div>
                <h3>Half double crochet</h3>
                <p>Yarn over, and insert the hook into the next stitch. Yarn over and pull up a loop. Yarn over again, and pull the yarn through all three loops on the hook.</p>
            </div>
            <div>
                <h3>Double crochet</h3>
                <p>Yarn over. Insert hook into the next stitch, yarn over, and pull up a loop. Yarn over and pull through two loops on the hook. Yarn over again and pull through both loops on the hook.</p>
            </div>
        </div>
        <p>Stitch descriptions taken from <a href="https://sarahmaker.com/basic-crochet-stitches/" target="_blank">https://sarahmaker.com/basic-crochet-stitches/</a></p>
        <h2>Easy Patterns</h2>
        <div id="patterns">
            <a href="https://justbcrafty.com/2016/01/crochet-coffee-cozy-pattern.html" target="_blank">
                <img src="https://justbcrafty.com/wp-content/uploads/2016/01/Crochet-Coffee-Cozy.png"></img>
                <p>Coffee cozy pattern</p>
            </a>
            <a href="https://sarahmaker.com/crochet-heart-pattern/" target="_blank">
                <img src="https://sarahmaker.com/wp-content/uploads/2021/01/crochet-heart-pattern-9.jpg.webp"></img>
                <p>Heart pattern</p>
            </a>
            <a href="https://www.mamainastitch.com/beginner-crochet-washcloth-pattern/" target="_blank">
                <img src="https://www.mamainastitch.com/wp-content/uploads/2015/01/Three-Washcloths-Orchids-2.jpg"></img>
                <p>Washcloth pattern</p>
            </a>
            <a href="https://sarahmaker.com/crochet-scarf-pattern/" target="_blank">
                <img src="https://sarahmaker.com/wp-content/uploads/2021/08/sarahmaker-crochet-scarf-pattern-9-1024x1536.jpg.webp"></img>
                <p>Scarf pattern</p>
            </a>
        </div>
    </div>
  )
}

export default MainContent