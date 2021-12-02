const bolbtn=document.querySelector('#boldbtn')

bolbtn.addEventListener('click',()=>{
    document.execCommand('bold')
})

const italicbtn=document.querySelector('#italicbtn')

italicbtn.addEventListener('click',()=>{
    document.execCommand('italic')
})

const underlinebtn=document.querySelector('#underlinebtn')

underlinebtn.addEventListener('click',()=>{
    document.execCommand('underline')
})

const colorbtn=document.querySelector('#colorbtn')

colorbtn.addEventListener('input',()=>{
    document.execCommand('forecolor',false,colorbtn.value);
})


const backcolorbtn=document.querySelector('#backcolorbtn')

backcolorbtn.addEventListener('input',()=>{
    document.execCommand('backcolor',false,backcolorbtn.value);
})


const justifyLeft=document.querySelector('#justifyLeft')

justifyLeft.addEventListener('click',()=>{
    document.execCommand('justifyLeft')
})

const justifycenter=document.querySelector('#justifycenter')

justifycenter.addEventListener('click',()=>{
    document.execCommand('justifycenter')
})

const justifyRight=document.querySelector('#justifyRight')

justifyRight.addEventListener('click',()=>{
    document.execCommand('justifyright')
})

const justifyfull=document.querySelector('#justifyfull')

justifyfull.addEventListener('click',()=>{
    document.execCommand('justifyfull')
})

const outdent=document.querySelector('#outdent')

outdent.addEventListener('click',()=>{
    document.execCommand('outdent')
})

const indent=document.querySelector('#indent')

indent.addEventListener('click',()=>{
    document.execCommand('indent')
})



const dropdown2=document.querySelector('#dropdown2')

dropdown2.addEventListener('click',()=>{
    document.execCommand('fontName',false,dropdown2.value);
})


const unorderlist=document.querySelector('#unorderlist')

unorderlist.addEventListener('click',()=>{
    document.execCommand('insertUnorderedList');
})

const orderlist=document.querySelector('#orderlist')

orderlist.addEventListener('click',()=>{
    document.execCommand('insertorderedlist');
})

const superscript=document.querySelector('#superscript')

superscript.addEventListener('click',()=>{
    document.execCommand( "superscript", false, "" );         
})


const subscript=document.querySelector('#subscript')

subscript.addEventListener('click',()=>{
    document.execCommand( "subscript", false, "" );         
})


