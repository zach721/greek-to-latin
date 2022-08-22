/*
 * Javascript Greek to Latin converter. 
 * @author: Zakarias.
 * This is a free software you can download it and 
 * modyfing it according to your own preferences.
  */


function convert(text){

    
    let search = 'α'
    let replaceWith = 'a'
    let search2 = 'β'
    let replaceWith2 = 'b'
    let search3 = 'γ'
    let replaceWith3 = 'g'
    let search4 = 'δ'
    let replaceWith4 = 'd'
    let search5 = 'ε'
    let replaceWith5 = 'e'
    let search6 = 'ζ'
    let replaceWith6 = 'z'
    let search7 = 'η'
    let replaceWith7 = 'e'
    let search8 = 'θ'
    let replaceWith8 = 'th'
    let search9 = 'ι'
    let replaceWith9 = 'i'
    let search10 = 'κ'
    let replaceWith10 = 'k'
    let search11 = 'λ'
    let replaceWith11 = 'l'
    let search12 = 'μ'
    let replaceWith12 = 'm'
    let search13 = 'ν'
    let replaceWith13 = 'n'
    let search14 = 'ξ'
    let replaceWith14 = 'x'
    let search15 = 'ο'
    let replaceWith15 = 'o'
    let search16 = 'π'
    let replaceWith16 = 'p'
    let search17 = 'ρ'
    let replaceWith17 = 'r'
    let search18 = 'ς'
    let replaceWith18 = 's'
    let search19 = 'σ'
    let replaceWith19 = 's'
    let search20 = 'τ'
    let replaceWith20 = 't'
    let search21 = 'υ'
    let replaceWith21 = 'y'
    let search22 = 'φ'
    let replaceWith22 = 'ph'
    let search23 = 'χ'
    let replaceWith23 = 'ch'
    let search24 = 'ψ'
    let replaceWith24 = 'ps'
    let search25 = 'ω'
    let replaceWith25 = 'o'


    //new line


  let search_ = 'Α'
    let replaceWith_ = 'a'
    let search2_ = 'Β'
    let replaceWith2_ = 'b'
    let search3_ = 'Γ'
    let replaceWith3_ = 'g'
    let search4_ = 'Δ'
    let replaceWith4_ = 'd'
    let search5_ = 'Ε'
    let replaceWith5_ = 'e'
    let search6_ = 'Ζ'
    let replaceWith6_ = 'z'
    let search7_ = 'Η'
    let replaceWith7_ = 'e'
    let search8_ = 'Θ'
    let replaceWith8_ = 'th'
    let search9_ = 'Ι'
    let replaceWith9_ = 'i'
    let search10_ = 'Κ'
    let replaceWith10_ = 'k'
    let search11_ = 'Λ'
    let replaceWith11_ = 'l'
    let search12_ = 'Μ'
    let replaceWith12_ = 'm'
    let search13_ = 'Ν'
    let replaceWith13_ = 'n'
    let search14_ = 'Ξ'
    let replaceWith14_ = 'x'
    let search15_ = 'Ο'
    let replaceWith15_ = 'o'
    let search16_ = 'Π'
    let replaceWith16_ = 'p'
    let search17_ = 'Ρ'
    let replaceWith17_ = 'r'
    let search18_ = 'Σ'
    let replaceWith18_ = 's'
    let search19_ = 'Σ'
    let replaceWith19_ = 's'
    let search20_ = 'Τ'
    let replaceWith20_ = 't'
    let search21_ = 'Υ'
    let replaceWith21_ = 'y'
    let search22_ = 'Φ'
    let replaceWith22_ = 'ph'
    let search23_ = 'Χ'
    let replaceWith23_ = 'ch'
    let search24_ = 'Ψ'
    let replaceWith24_ = 'ps'
    let search25_ = 'Ω'
    let replaceWith25_ = 'o'
   


      
      if(text.includes('Α')){
        text = text.split(search_).join(replaceWith_)
      }
      if(text.includes('Β')){
        text = text.split(search2_).join(replaceWith2_)
      }
      if(text.includes('Γ')){
        text = text.split(search3_).join(replaceWith3_)
      }
      if(text.includes('Δ')){
        text = text.split(search4_).join(replaceWith4_)
      }
      if(text.includes('Ε')){
        text = text.split(search5_).join(replaceWith5_)
      }
      if(text.includes('Ζ')){
        text = text.split(search6_).join(replaceWith6_)
      }
      if(text.includes('Η')){
        text = text.split(search7_).join(replaceWith7_)
      }
      if(text.includes('Θ')){
        text = text.split(search8_).join(replaceWith8_)
      }
      if(text.includes('Ι')){
        text = text.split(search9_).join(replaceWith9_)
      }
      if(text.includes('Κ')){
        text = text.split(search10_).join(replaceWith10_)
      }
      if(text.includes('Λ')){
        text = text.split(search11_).join(replaceWith11_)
      }
      if(text.includes('Μ')){
        text = text.split(search12_).join(replaceWith12_)
      }
      if(text.includes('Ν')){
        text = text.split(search13_).join(replaceWith13_)
      }
      if(text.includes('Ξ')){
        text = text.split(search14_).join(replaceWith14_)
      }
      if(text.includes('Ο')){
        text = text.split(search15_).join(replaceWith15_)
      }
      if(text.includes('Π')){
        text = text.split(search16_).join(replaceWith16_)
      }
      if(text.includes('Ρ')){
        text = text.split(search17_).join(replaceWith17_)
      }
      if(text.includes('Σ')){
        text = text.split(search18_).join(replaceWith18_)
      }
      if(text.includes('Σ')){
        text = text.split(search19_).join(replaceWith19_)
      }
      if(text.includes('Τ')){
        text = text.split(search20_).join(replaceWith20_)
      }
      if(text.includes('Υ')){
        text = text.split(search21_).join(replaceWith21_)
      }
      if(text.includes('Φ')){
        text = text.split(search22_).join(replaceWith22_)
      }
      if(text.includes('Χ')){
        text = text.split(search23_).join(replaceWith23_)
      }
      if(text.includes('Ψ')){
        text = text.split(search24_).join(replaceWith24_)
      }
      if(text.includes('Ω')){
        text = text.split(search25_).join(replaceWith25_)
      }
      
    
    //new line
      
      if(text.includes('α')){
        text = text.split(search).join(replaceWith)
      }
      if(text.includes('β')){
        text = text.split(search2).join(replaceWith2)
      }
      if(text.includes('γ')){
        text = text.split(search3).join(replaceWith3)
      }
      if(text.includes('δ')){
        text = text.split(search4).join(replaceWith4)
      }
      if(text.includes('ε')){
        text = text.split(search5).join(replaceWith5)
      }
      if(text.includes('ζ')){
        text = text.split(search6).join(replaceWith6)
      }
      if(text.includes('η')){
        text = text.split(search7).join(replaceWith7)
      }
      if(text.includes('θ')){
        text = text.split(search8).join(replaceWith8)
      }
      if(text.includes('ι')){
        text = text.split(search9).join(replaceWith9)
      }
      if(text.includes('κ')){
        text = text.split(search10).join(replaceWith10)
      }
      if(text.includes('λ')){
        text = text.split(search11).join(replaceWith11)
      }
      if(text.includes('μ')){
        text = text.split(search12).join(replaceWith12)
      }
      if(text.includes('ν')){
        text = text.split(search13).join(replaceWith13)
      }
      if(text.includes('ξ')){
        text = text.split(search14).join(replaceWith14)
      }
      if(text.includes('ο')){
        text = text.split(search15).join(replaceWith15)
      }
      if(text.includes('π')){
        text = text.split(search16).join(replaceWith16)
      }
      if(text.includes('ρ')){
        text = text.split(search17).join(replaceWith17)
      }
      if(text.includes('ς')){
        text = text.split(search18).join(replaceWith18)
      }
      if(text.includes('σ')){
        text = text.split(search19).join(replaceWith19)
      }
      if(text.includes('τ')){
        text = text.split(search20).join(replaceWith20)
      }
      if(text.includes('υ')){
        text = text.split(search21).join(replaceWith21)
      }
      if(text.includes('φ')){
        text = text.split(search22).join(replaceWith22)
      }
      if(text.includes('χ')){
        text = text.split(search23).join(replaceWith23)
      }
      if(text.includes('ψ')){
        text = text.split(search24).join(replaceWith24)
      }
      if(text.includes('ω')){
        text = text.split(search25).join(replaceWith25)
      }
      
      
       console.log(text)
    }
    convert('Γειά σου Κόσμε. Αυτό είναι ένα σενάριο Javascript')
    
