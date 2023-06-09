// Takes a camel case string and returns it as a capitalized and spaced title ,
// e.g. theCamelCaseString => The Camel Case String
module.exports.prettifyCamelCase = (str) => {
  let newString = str[0].toUpperCase();
  for (var i = 1; i < str.length; i++) {
    if (str[i].match(/[A-Z]/) != null) {
      newString = newString.concat(` ${str[i]}`);
    } else {
      newString = newString.concat(str[i]);
    }
  }
  return newString;
};

// Generic function to use a transporter to send mail to  from req
module.exports.sendMail = async (req, res, subject, recipient, transporter) => {
  let text = "";
  for (key in req.body) {
    text = text.concat(`${exports.prettifyCamelCase(key)}: ${req.body[key]}\n`);
  }

  try {
    await transporter.sendMail({
      from: req.body.userEmail,
      to: recipient,
      subject,
      text,
    });
  } catch (e) {
    console.log(e);
    res.send({ error: e });
  }

  res.send({ success: true });
};

// returns a random integer between min and max
module.exports.randInt=(min, max) => {
  return Math.floor(Math.random()*(max-min)+min);
}

// Generates a unique ID
module.exports.genUniqueId=() => {
  return '_'+Math.random().toString(36).substr(2, 9);
}

// Sort data bu number property
module.exports.sortByNumber=function (data, args) {
  console.log(args)
  return data.sort((a, b) => { return module.exports.stableSort(a, b, true, '#', 'Set Code', args) });
}

module.exports.stableSort=function (a, b, sortAsc, field, tiebreak='Set Code', _args) {
  if (_args.section=='Crew') { tiebreak='Date Joined' }
  if (!a||!b) { if (sortAsc) { return 1 } else { return 0 } }
  aTie=a[tiebreak]
  bTie=b[tiebreak]
  a=a[field]
  b=b[field]

  // Sort Dates
  if (field.toLowerCase().includes('date')) {
      a=new Date(a).getTime();
      b=new Date(b).getTime();
  }

  // Sort numbers
  let aNum=parseFloat(a);
  let bNum=parseFloat(b);
  if (!a) { if (sortAsc) { aNum=Infinity } else { aNum=-Infinity } }
  if (!b) { if (sortAsc) { bNum=Infinity } else { bNum=-Infinity } }
  let aNumTie=parseFloat(aTie);
  let bNumTie=parseFloat(bTie);
  if (!isNaN(aNum)&&!isNaN(bNum)) {
      if (sortAsc) { if (aNum==bNum) { if (aNumTie>bNumTie) { return 1 } if (bNumTie>aNumTie) { return -1 } return 0 } return aNum-bNum }
      else { if (bNum==aNum) { if (bNumTie>aNumTie) { return 1 } if (aNumTie>bNumTie) { return -1 } return 0 } return bNum-aNum }
  }
  // Else sort alphabetical
  else {
      if (!a) { if (sortAsc) { a='ZZZZZZZZZ' } else { a='AAAAAAAAA' } }
      if (!b) { if (sortAsc) { b='ZZZZZZZZZ' } else { b='AAAAAAAAA' } }
      if (sortAsc) { if (a>b) { return 1 } if (b>a) { return -1 } return 0 }
      else { if (b>a) { return 1 } if (a>b) { return -1 } return 0 }
  }
}

// Return Null if value is zero or nan
module.exports.zeroNanToNull=function (val) {
  if (val==0||isNaN(val)||val==Infinity||val==-Infinity) { val=null }
  return val
}

// Convert to 32bit integer
module.exports.stringToIntHash=function (string) {
  var hash=0;

  if (string.length==0) return hash;

  for (i=0; i<string.length; i++) {
      char=string.charCodeAt(i);
      hash=((hash<<5)-hash)+char;
      hash=hash&hash;
  }

  return Math.abs(hash);
}