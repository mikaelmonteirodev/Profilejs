function Profile(props){
    return <div>
       <h1>{props.nome}</h1>
       <h2>{props.description}</h2>
       
       {props.children}
    </div>;
 }
 function ProfileLinks(props){
    const twitter = props.twitter;
    const linkedin = props.linkedin;
    return <div>
      Twitter:  <a href={"https://twitter.com/" + twitter}> @{twitter}  </a>
      <br />
      Linkedin:  <a href={"https://linkedin.com/in/" + linkedin}> @{linkedin}</a>
      <br />
 
    </div>;
 }
 function ProfileSkills(props){
    const conteudo = props.children;
    return <div className="pictures"> {conteudo}  </div>;
 }
 function JSSkill(){
    return <img src="" alt="JS" />;
 }
 function Html5Skill() {
    return <img src="" alt="Html" />;
 }
 function CSSSkill(){
    return <img src="" alt="CSS" />;
 }
 function NodeSkill(){
    return <img src="" alt="Node" />;
 }
 
 function App() {
    return   <Profile
       nome="Mikael"
       description=" lorem ipsum asdasda sda sdas as dasd asd  apoap a"  
       >
          <ProfileLinks 
             twitter="mikael"
             linkedin="mikaeldev"
          />
 
          <ProfileSkills>
             <JSSkill />
             <Html5Skill />
             <CSSSkill />
             <NodeSkill />
          </ProfileSkills>
       </Profile>
 }
 
 ReactDOM.render(<App />, document.getElementById('app'));
 