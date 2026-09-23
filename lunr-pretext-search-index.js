var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-1-1-statements",
  "level": "1",
  "url": "sec-1-1-statements.html",
  "type": "Section",
  "number": "1.1",
  "title": "Statements, Arguments, and Truth Tables",
  "body": " Statements, Arguments, and Truth Tables  Coming soon!  "
},
{
  "id": "sec-2-1-predicates",
  "level": "1",
  "url": "sec-2-1-predicates.html",
  "type": "Section",
  "number": "2.1",
  "title": "Predicates",
  "body": " Predicates  Coming soon!  "
},
{
  "id": "sec-3-1-proofs",
  "level": "1",
  "url": "sec-3-1-proofs.html",
  "type": "Section",
  "number": "3.1",
  "title": "An Introduction to Proofs",
  "body": " An Introduction to Proofs  Coming soon!  "
},
{
  "id": "sec-4-1-basics",
  "level": "1",
  "url": "sec-4-1-basics.html",
  "type": "Section",
  "number": "4.1",
  "title": "Basics of Sets",
  "body": " Basics of Sets  Coming soon!  "
},
{
  "id": "sec-5-1-divisibility",
  "level": "1",
  "url": "sec-5-1-divisibility.html",
  "type": "Section",
  "number": "5.1",
  "title": "Divisibility",
  "body": " Divisibility      If and are integers with , we say that  divides  if there exists an integer such that . That is, divides if is an integer. If divides , we write .  In this context, is called the divisor and is called the multiple or sometimes the dividend .    Note that \" \" is a statement ; it is either true or false. Contrast this with notation like \" ,\" which represents the mathematical operation implied by \" .\" As such, we would never write something like \" = 2.\" Instead, we would say something like \" because .\"  Similarly, you'll want to avoid writing expressions like \" ,\" because this would be read as \" divides the quantity is equal to divides ,\" which is clearly not what we are intending to communicate.  Some additional comments about :     If , we might say that \" is a multiple of \" or that \" is a factor of .\"    \" \" is equivalent to the more familiar \" is divisible by .\"    If it is not the case that , we write .         Is divisible by ?  Does ?  Does divide ?  Is a multiple of ?        Yes, since .  Yes, since .  Yes, since .  Yes, since .      The sub-problems in are all asking essentially the same question, just in different ways. In number theory and related mathematical applications, we almost exclusively use the notion of divides , since it allows us to discuss division in terms of multiplication.       If , does ?    If , does ?       Remember, if and for some integer .       No. By definition, implies . Said another way, implies . isn't even defined.    Yes. In this case, , so .       The following theorem will be useful in a future section, so we'll state it and prove it here.    For all integers and , if and are positive and , then .    Suppose and are positive integers such that . Then, there exists an integer such that . Moreover, (and hence ) since . Therefore, .      The only divisors of are and .    Note that , and so . Similarly, , and so .  Now, suppose is another integer that divides . Then, there exists an integer such that . Note that since is positive, and are either both positive or both negative. Assume without loss of generality that both and are positive (the argument would be identical if they were both negative; I would encourage you to think about why). Hence, is positive, and therefore, by , . Since is a positive integer, we conclude .    Some of the basic properties of divisibility are summarized in the theorem below.    Let , , and be integers with . Then:    If and , then .  If , then for any integer .  If and , then .      Let , , and be integers with .     Suppose and . Then there exists integers and such that and . Then, and so .    Suppose . Then there exists an integer such that . Then, and so .    Left as an exercise.       "
},
{
  "id": "def-divisibility",
  "level": "2",
  "url": "sec-5-1-divisibility.html#def-divisibility",
  "type": "Definition",
  "number": "5.1.1",
  "title": "",
  "body": "  If and are integers with , we say that  divides  if there exists an integer such that . That is, divides if is an integer. If divides , we write .  In this context, is called the divisor and is called the multiple or sometimes the dividend .   "
},
{
  "id": "ex-div-intro",
  "level": "2",
  "url": "sec-5-1-divisibility.html#ex-div-intro",
  "type": "Example",
  "number": "5.1.2",
  "title": "",
  "body": "    Is divisible by ?  Does ?  Does divide ?  Is a multiple of ?        Yes, since .  Yes, since .  Yes, since .  Yes, since .     "
},
{
  "id": "ex-div0",
  "level": "2",
  "url": "sec-5-1-divisibility.html#ex-div0",
  "type": "Example",
  "number": "5.1.3",
  "title": "",
  "body": "     If , does ?    If , does ?       Remember, if and for some integer .       No. By definition, implies . Said another way, implies . isn't even defined.    Yes. In this case, , so .      "
},
{
  "id": "lem-pos-div",
  "level": "2",
  "url": "sec-5-1-divisibility.html#lem-pos-div",
  "type": "Lemma",
  "number": "5.1.4",
  "title": "",
  "body": "  For all integers and , if and are positive and , then .    Suppose and are positive integers such that . Then, there exists an integer such that . Moreover, (and hence ) since . Therefore, .   "
},
{
  "id": "thm-div1",
  "level": "2",
  "url": "sec-5-1-divisibility.html#thm-div1",
  "type": "Theorem",
  "number": "5.1.5",
  "title": "",
  "body": "  The only divisors of are and .    Note that , and so . Similarly, , and so .  Now, suppose is another integer that divides . Then, there exists an integer such that . Note that since is positive, and are either both positive or both negative. Assume without loss of generality that both and are positive (the argument would be identical if they were both negative; I would encourage you to think about why). Hence, is positive, and therefore, by , . Since is a positive integer, we conclude .   "
},
{
  "id": "thm-div-basics",
  "level": "2",
  "url": "sec-5-1-divisibility.html#thm-div-basics",
  "type": "Theorem",
  "number": "5.1.6",
  "title": "",
  "body": "  Let , , and be integers with . Then:    If and , then .  If , then for any integer .  If and , then .      Let , , and be integers with .     Suppose and . Then there exists integers and such that and . Then, and so .    Suppose . Then there exists an integer such that . Then, and so .    Left as an exercise.      "
},
{
  "id": "sec-5-2-primes",
  "level": "1",
  "url": "sec-5-2-primes.html",
  "type": "Section",
  "number": "5.2",
  "title": "The Prime Numbers",
  "body": " The Prime Numbers  Much of modern number theory is concerned with the nature and distribution prime numbers , in no small part because they can be considered the \"building blocks\" of the positive integers in much the same way that atoms can be considered the building blocks of molecules in chemistry. As such, it behooves us to spend some time talking about them here.    An integer is called a prime number if its only positive factors are and . A positive integer greater than that is not prime is called composite .    Said another way, if is prime, then implies .  You might ask why is not considered prime. Hold on to this quesiton.  To (naivly) check if a number is prime, you would need to check if for every positive integer . But this is far more work than is actually needed. In fact, it turns out that every positive integer is divisible by at least one prime, and therefore one need only check if for each of the primes . This is illustrated by the following theorem.    Any integer is divisible by a prime number.    Coming soon...    For example, is composite since, e.g., . That is, . But both and are composite too, since and . Recursivly applying , one finds: Crtically, each of the remaining factors is prime. We can apply this same recursive logic to any integer greater than 1 and arrive at the same result. Each integer can be factored into a product of primes. And, in fact, that decomposition into a product of primes is unique (up to the ordering of the factors). This result, trivial though it may sound, is so significant that mathematicians have given it the pompous name of the \"Fundamental Theorem of Arithmetic.\"   Fundamental Theorem of Arithmetic   Every integer greater than 1 can be be written uniquely (up to reordering) as a product of prime numbers.    Not happening.    That is, one can write any integer in the following way: where each is a prime number and each is a nonnegative integer. Uniqueness up to reordering means that, for any integer , the decomposition into primes is fixed, but since multiplication is commutative, the ordering of the factors is not.   is one of the reasons we exclude from the list of primes. If we were to include as a prime, the theorem would be false, since any integer can be written as: for any arbitrary , and thus uniqueness is violated. If you continue your study of number theorey beyond this class, you will find more and more exmples like this one that make the exclusion of feel natural.  As you move further and futher along in the list of positive integers, you will find that primes become less and less common. For example, between and , there are four primes ( ), but between and , there is only one ( ). This may feel like a convincing argument that there are finitely many primes, but this is in fact false. The infinitude of the primes has been known since the days of Euclid, and we'll prove this using the same proof he did.    Suppose by way of contradiction that there are finitely many primes. Then, we can enumerate them in a set: Consider the positive integer: Since is an integer greater than , we have from that there exists a prime such that . However, since is finite, we have . Then, .  From part 1 of , and implies . From , we find that this implies , which is a contradiction. Thus, there must be infinitely many primes.    Even though there are infinitely many primes, their density among the naturals vanishes rapidly once you move far enough away from zero. If denotes the number of prime numbers less than or equal to , then we have the following result from the study of analytic number theory :   Prime Number Theorem      Not happening.    This tells us that as gets larger and larger, becomes a better and better approximation of the number of primes numbers less than or equal to .  "
},
{
  "id": "def-prime",
  "level": "2",
  "url": "sec-5-2-primes.html#def-prime",
  "type": "Definition",
  "number": "5.2.1",
  "title": "",
  "body": "  An integer is called a prime number if its only positive factors are and . A positive integer greater than that is not prime is called composite .   "
},
{
  "id": "thm-div-by-primes",
  "level": "2",
  "url": "sec-5-2-primes.html#thm-div-by-primes",
  "type": "Theorem",
  "number": "5.2.2",
  "title": "",
  "body": "  Any integer is divisible by a prime number.    Coming soon...   "
},
{
  "id": "thm-fta",
  "level": "2",
  "url": "sec-5-2-primes.html#thm-fta",
  "type": "Theorem",
  "number": "5.2.3",
  "title": "Fundamental Theorem of Arithmetic.",
  "body": " Fundamental Theorem of Arithmetic   Every integer greater than 1 can be be written uniquely (up to reordering) as a product of prime numbers.    Not happening.   "
},
{
  "id": "lem-subsequent-ints",
  "level": "2",
  "url": "sec-5-2-primes.html#lem-subsequent-ints",
  "type": "Lemma",
  "number": "5.2.4",
  "title": "",
  "body": "  Suppose by way of contradiction that there are finitely many primes. Then, we can enumerate them in a set: Consider the positive integer: Since is an integer greater than , we have from that there exists a prime such that . However, since is finite, we have . Then, .  From part 1 of , and implies . From , we find that this implies , which is a contradiction. Thus, there must be infinitely many primes.   "
},
{
  "id": "thm-prime-number",
  "level": "2",
  "url": "sec-5-2-primes.html#thm-prime-number",
  "type": "Theorem",
  "number": "5.2.5",
  "title": "Prime Number Theorem.",
  "body": " Prime Number Theorem      Not happening.   "
},
{
  "id": "sec-5-3-division-algorithm",
  "level": "1",
  "url": "sec-5-3-division-algorithm.html",
  "type": "Section",
  "number": "5.3",
  "title": "The Division Algorithm",
  "body": " The Division Algorithm  When working with relatively small numbers, determining whether or not is not a difficult task. But what if you were asked to determine if ? How would you do it?  One way is list all of the multiples of the divisor until you meet or exceed the dividend. In our case:     In the penultimate step, the product was smaller than our target, but in the final step, the product exceeded it. That means that:     But we can do better. Notice that:     This allows us to write:     In this context, is known as the quotient and is known as the remainder when is divided by . Note that this is the same quotient and remainder you would have gotten if you used the standard division-with-remainder process you learned when you were younger.  We formalize this idea below.   The Division Algorithm   Let be integers with . Then, there exist unique integers and , with , such that .    Omitted, but the intuition above is the important takeaway.      In the context of , is called the divisor , is called the dividend , is called the quotient , and is called the remainder . We write:       "
},
{
  "id": "thm-div-alg",
  "level": "2",
  "url": "sec-5-3-division-algorithm.html#thm-div-alg",
  "type": "Theorem",
  "number": "5.3.1",
  "title": "The Division Algorithm.",
  "body": " The Division Algorithm   Let be integers with . Then, there exist unique integers and , with , such that .    Omitted, but the intuition above is the important takeaway.   "
},
{
  "id": "def-div-alg",
  "level": "2",
  "url": "sec-5-3-division-algorithm.html#def-div-alg",
  "type": "Definition",
  "number": "5.3.2",
  "title": "",
  "body": "  In the context of , is called the divisor , is called the dividend , is called the quotient , and is called the remainder . We write:      "
},
{
  "id": "sec-5-3-modular-arithmetic",
  "level": "1",
  "url": "sec-5-3-modular-arithmetic.html",
  "type": "Section",
  "number": "5.4",
  "title": "Modular Arithmetic",
  "body": " Modular Arithmetic   Text of section.     Properties  Text of subsection.     Solving Congruences  Text of subsection.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
