const generateDownload=(e,...t)=>{const n=new Blob(t,{type:"text/plain"}),o=document.createElement("a");o.href=URL.createObjectURL(n),o.download=e,document.documentElement.append(o),o.click(),o.remove(),URL.revokeObjectURL(n)};