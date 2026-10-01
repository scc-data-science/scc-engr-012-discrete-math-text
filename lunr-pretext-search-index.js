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
  "body": " Statements, Arguments, and Truth Tables   Overview  Logic is not the study of the content of an argument. Logic is the study of the structure of an argument. A logical analysis will never be able to tell you whether or not a particular claim has merit; it will only tell you if the truth of the conclusion follows necessarily from the truth of the premises.  What do I mean by the structure of an argument?  Consider the following arguments.  Argument 1:   If and , then .  Therefore, if , then or .   Argument 2:   If I like Math and I like Data Science, I will like Discrete Mathematics.  Therefore, if I do not like Discrete Mathematics, then I do not like Math or I do not like Data Science.   The content of these arguments is very different, but the structure is the same. They are both of the form:   If and , then .  Therefore, if not , then not or not .   Both are valid arguments in the context of formal logic, but one is true, while the other has little merit. The actual content contained within the statement variables , , and is irrelevant to our analysis. The structure is what matters.    Statements and Arguments.   Whenever you are studying a new branch of mathematics, you weant to start with a rigorous foundation. You'll want to define the space and the elements that live within it, impose some additional structure on that space, and then explore the consequences. So, in order to do that, we need some definitions:    A statement (or proposition ) is a sentence that is true or false but not both.      An atomic statement is a statement that cannot be divided into smaller statements.      A molecular statement is a statement that is not atomic.    Ways to combine statements:    The conjunction (i.e., and ) of and ( ) is true when and are both true, and false otherwise.  The disjunction (i.e., or ) of and ( ) is true when either or , or possibly both and , are true, and false otherwise.  The negation (i.e., not ) of ( or ) is true when is false, and false otherwise.      Truth Tables  To more easily define these terms, we introduce the concept of a truth table. What makes formal logic so nice to work with is the fact that each of the individual statements can only take on one of two values, (True) or (False). So, we enumerate them.  Consider the truth table for :                                Consider the truth table for :                                Consider the truth table for :                  These tables give us an easy framework to understand more complicated combinations of statements.   Examples  Here we'll run through a couple more truth tables so you can see what they might look like in more complicated situations.   Exclusive Or   In logic, the word or is inclusive ; that is, it includes the case in which both statements are true. It is useful to have a notion of an exclusive or that is only true when exactly one of and are true. I claim that the following statement form represents this concept:     Show that is true when exactly one of and is true by constructing a truth table.    We will construct a truth table for the statement .                                                  The last column is true when exactly one of and is true, as desired.       Example 2 : Draw the truth table for the statement .    We will construct a truth table for the statement .                                                                                       Logical Equivalence  Def. Two statements, and , are said to be logically equivalent if, and only if, they have the same truth value under any assignment of truth values to their atomic parts. If and are logically equivalent, we write .  Essentially, two statements are logically equivalent if they have identical columns on a truth tables.   Examples     Example 1 : and are logically eqivalent (i.e., ).    Consider the truth table for and :                      The two columns are identical, so .      Are and logically equivalent? That is, can you distribute the negation over the conjunction?    Consider the truth table for and :                                                        The two columns are not identical:                                      Hence , so you cannot distribute negations over conjunctions.    As we saw in , negations do not distribute over conjunctions. So how do you negate conjunctions?     De Morgan's Laws  What is the opposite of the statement I like Math and I like Data Science ? For the statement to be true, both atomic statements I like Math and I like Data Science need to be true. So, if the statement to be false, at least one of those atomic statements needs to be false. So:   (I like Math and I like Data Science) (I like Math) (I like Data Science)  That is, I claim .                                                        Similarly, (prove this!).  These equations are known as De Morgan's Laws :        Tautologies and Contradictions  For a copmplete foundation, we need two more definitions:    A tautology is a statement that is always true.      A contradiction is a statement that is always false.      Show that is a contradiction.    Consider the truth table for :                      Since is always false, it is a contradiction. Hence, .      Show that .    Consider the truth table for :                      Since is equivalent to , we have .      "
},
{
  "id": "def-statement",
  "level": "2",
  "url": "sec-1-1-statements.html#def-statement",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  A statement (or proposition ) is a sentence that is true or false but not both.   "
},
{
  "id": "def-atomic-statement",
  "level": "2",
  "url": "sec-1-1-statements.html#def-atomic-statement",
  "type": "Definition",
  "number": "1.1.2",
  "title": "",
  "body": "  An atomic statement is a statement that cannot be divided into smaller statements.   "
},
{
  "id": "def-molecular-statement",
  "level": "2",
  "url": "sec-1-1-statements.html#def-molecular-statement",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": "  A molecular statement is a statement that is not atomic.   "
},
{
  "id": "stmt-and-args-2-6",
  "level": "2",
  "url": "sec-1-1-statements.html#stmt-and-args-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conjunction disjunction negation "
},
{
  "id": "examples-3",
  "level": "2",
  "url": "sec-1-1-statements.html#examples-3",
  "type": "Example",
  "number": "1.1.4",
  "title": "Exclusive Or.",
  "body": " Exclusive Or   In logic, the word or is inclusive ; that is, it includes the case in which both statements are true. It is useful to have a notion of an exclusive or that is only true when exactly one of and are true. I claim that the following statement form represents this concept:     Show that is true when exactly one of and is true by constructing a truth table.    We will construct a truth table for the statement .                                                  The last column is true when exactly one of and is true, as desired.   "
},
{
  "id": "examples-4",
  "level": "2",
  "url": "sec-1-1-statements.html#examples-4",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": "   Example 2 : Draw the truth table for the statement .    We will construct a truth table for the statement .                                                                                   "
},
{
  "id": "logical-equivalence-2",
  "level": "2",
  "url": "sec-1-1-statements.html#logical-equivalence-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logically equivalent "
},
{
  "id": "examples-1-2",
  "level": "2",
  "url": "sec-1-1-statements.html#examples-1-2",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": "   Example 1 : and are logically eqivalent (i.e., ).    Consider the truth table for and :                      The two columns are identical, so .   "
},
{
  "id": "ex-distrubute-negation",
  "level": "2",
  "url": "sec-1-1-statements.html#ex-distrubute-negation",
  "type": "Example",
  "number": "1.1.7",
  "title": "",
  "body": "  Are and logically equivalent? That is, can you distribute the negation over the conjunction?    Consider the truth table for and :                                                        The two columns are not identical:                                      Hence , so you cannot distribute negations over conjunctions.   "
},
{
  "id": "de-morgans-laws-7",
  "level": "2",
  "url": "sec-1-1-statements.html#de-morgans-laws-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "De Morgan's Laws "
},
{
  "id": "def-tautology",
  "level": "2",
  "url": "sec-1-1-statements.html#def-tautology",
  "type": "Definition",
  "number": "1.1.8",
  "title": "",
  "body": "  A tautology is a statement that is always true.   "
},
{
  "id": "def-contradiction",
  "level": "2",
  "url": "sec-1-1-statements.html#def-contradiction",
  "type": "Definition",
  "number": "1.1.9",
  "title": "",
  "body": "  A contradiction is a statement that is always false.   "
},
{
  "id": "tautologies-and-contradictions-5",
  "level": "2",
  "url": "sec-1-1-statements.html#tautologies-and-contradictions-5",
  "type": "Example",
  "number": "1.1.10",
  "title": "",
  "body": "  Show that is a contradiction.    Consider the truth table for :                      Since is always false, it is a contradiction. Hence, .   "
},
{
  "id": "tautologies-and-contradictions-6",
  "level": "2",
  "url": "sec-1-1-statements.html#tautologies-and-contradictions-6",
  "type": "Example",
  "number": "1.1.11",
  "title": "",
  "body": "  Show that .    Consider the truth table for :                      Since is equivalent to , we have .   "
},
{
  "id": "sec-1-2-conditionals",
  "level": "1",
  "url": "sec-1-2-conditionals.html",
  "type": "Section",
  "number": "1.2",
  "title": "Conditionals and Biconditionals",
  "body": " Conditionals and Biconditionals   Conditionals   Conditionals are statements that are logical inferences: statements of the form If , then . We write such inferences as and read it as  implies  .    Note: Though this language ( implies ) is very common, it is often misleading. This language might make you think that can be, in some sense, deduced from , and that the truth of is necessary for to be meaningful. This is not the case, as we will soon see.  For example:   If and are the lengths of the legs of a right triangle with hypotenuse , then    Or:   If 288 is divisible by 9, then 288 is divisible by 3.   The truth of gives us information to update our knowledge about the truth of ; that is, the truth of is conditioned on .    Let and be propositions. The conditional statement  is the proposition if , then . The conditional statement is false when is true and is false, and true otherwise. In the conditional statement , is called the hypothesis (or antecedent or premise ) and is called the conclusion (or consequence ).    As a truth table:                                The first two rows are likely expected, based on the discussion above. The bottom two rows might be confusing, but they are consistent with the idea that the truth of is conditioned on the truth of .  A conditional statement that is true by virtue of the fact that its hypothesis is false (i.e., the bottom two rows) is called vacuously true , because the statement itself is true, it just does not apply in this particular situation. For example, consider our example from above:   If and are the lengths of the legs of a right triangle with hypotenuse , then    If is not a Pythagorean triple (i.e., is false), the implication is still true, it's just not relevant.    Representation as an Or Statement  I claim: .   Proof:                                             This is more profound than it seems. This implies that logical inferences can be reduced to simpler logical connectives. This is how computers implement more sophisticated logical operations. Computers cannot natively handle implications, but they can handle AND, OR, and NOT (using voltage signals and transistors).    Contrapositive, Converse, and Inverse  There are three different types of statements that are related to implications:   Contrapositive    The contrapositive of the statement If , then (i.e., ) is the statement If not , then not (i.e., ).    The following fact is very important, and is often used in mathematical proofs:    The contrapositive of an implication is logically equivalent to the original implication. That is, .    Homework.    Why is this so important? Because it can often simplify difficult problems into much simpler ones.   What is the converse of If is even, then is even ? It is If is odd, then is odd. This is much easier to prove!     Converse    The converse of the statement If , then (i.e., ) is the statement If , then (i.e., ).    Is a conditional logically equivalent to its converse? No! (Prove this.)    Inverse    The inverse of the statement If , then (i.e., ) is the statement If not , then not (i.e., ).    Is a conditional logically equivalent to its inverse? No! (Prove this.)      Biconditionals     Let and be propositions. The biconditional statement  is the proposition if and only if . The biconditional statement is true when and have the same truth values, and false otherwise.                                  Claim: .  Note: Since can be written in terms of AND, OR, and NOT, can also be written in terms of AND, OR, and NOT.    Necessary and Sufficient Conditions  If and are statements:    is a sufficient condition for means if then .  is a necessary condition for means if not then not .    Using the contrapositive, we see that is a necessary condition for equivalently means if then . Hence, means that is a necessary and sufficient condition for (and equivalently is a necessary and sufficient condition for ).    "
},
{
  "id": "conditionals-2-4",
  "level": "2",
  "url": "sec-1-2-conditionals.html#conditionals-2-4",
  "type": "Example",
  "number": "1.2.1",
  "title": "",
  "body": " If and are the lengths of the legs of a right triangle with hypotenuse , then   "
},
{
  "id": "conditionals-2-6",
  "level": "2",
  "url": "sec-1-2-conditionals.html#conditionals-2-6",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": " If 288 is divisible by 9, then 288 is divisible by 3.  "
},
{
  "id": "conditionals-2-8",
  "level": "2",
  "url": "sec-1-2-conditionals.html#conditionals-2-8",
  "type": "Definition",
  "number": "1.2.3",
  "title": "",
  "body": "  Let and be propositions. The conditional statement  is the proposition if , then . The conditional statement is false when is true and is false, and true otherwise. In the conditional statement , is called the hypothesis (or antecedent or premise ) and is called the conclusion (or consequence ).   "
},
{
  "id": "conditionals-2-12",
  "level": "2",
  "url": "sec-1-2-conditionals.html#conditionals-2-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vacuously true "
},
{
  "id": "conditionals-2-13",
  "level": "2",
  "url": "sec-1-2-conditionals.html#conditionals-2-13",
  "type": "Example",
  "number": "1.2.4",
  "title": "",
  "body": " If and are the lengths of the legs of a right triangle with hypotenuse , then   "
},
{
  "id": "representation-as-an-or-statement-3",
  "level": "2",
  "url": "sec-1-2-conditionals.html#representation-as-an-or-statement-3",
  "type": "Example",
  "number": "1.2.5",
  "title": "",
  "body": " Proof:                                            "
},
{
  "id": "contrapositive-2",
  "level": "2",
  "url": "sec-1-2-conditionals.html#contrapositive-2",
  "type": "Definition",
  "number": "1.2.6",
  "title": "",
  "body": "  The contrapositive of the statement If , then (i.e., ) is the statement If not , then not (i.e., ).   "
},
{
  "id": "contrapositive-4",
  "level": "2",
  "url": "sec-1-2-conditionals.html#contrapositive-4",
  "type": "Theorem",
  "number": "1.2.7",
  "title": "",
  "body": "  The contrapositive of an implication is logically equivalent to the original implication. That is, .    Homework.   "
},
{
  "id": "contrapositive-6",
  "level": "2",
  "url": "sec-1-2-conditionals.html#contrapositive-6",
  "type": "Example",
  "number": "1.2.8",
  "title": "",
  "body": " What is the converse of If is even, then is even ? It is If is odd, then is odd. This is much easier to prove!  "
},
{
  "id": "converse-2",
  "level": "2",
  "url": "sec-1-2-conditionals.html#converse-2",
  "type": "Definition",
  "number": "1.2.9",
  "title": "",
  "body": "  The converse of the statement If , then (i.e., ) is the statement If , then (i.e., ).   "
},
{
  "id": "inverse-2",
  "level": "2",
  "url": "sec-1-2-conditionals.html#inverse-2",
  "type": "Definition",
  "number": "1.2.10",
  "title": "",
  "body": "  The inverse of the statement If , then (i.e., ) is the statement If not , then not (i.e., ).   "
},
{
  "id": "biconditionals-2-1",
  "level": "2",
  "url": "sec-1-2-conditionals.html#biconditionals-2-1",
  "type": "Definition",
  "number": "1.2.11",
  "title": "",
  "body": "  Let and be propositions. The biconditional statement  is the proposition if and only if . The biconditional statement is true when and have the same truth values, and false otherwise.   "
},
{
  "id": "necessary-and-sufficient-conditions-3",
  "level": "2",
  "url": "sec-1-2-conditionals.html#necessary-and-sufficient-conditions-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sufficient condition necessary condition "
},
{
  "id": "necessary-and-sufficient-conditions-4",
  "level": "2",
  "url": "sec-1-2-conditionals.html#necessary-and-sufficient-conditions-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "necessary condition "
},
{
  "id": "sec-1-3-valid-arguments",
  "level": "1",
  "url": "sec-1-3-valid-arguments.html",
  "type": "Section",
  "number": "1.3",
  "title": "Valid and Invalid Arguments",
  "body": " Valid and Invalid Arguments   Valid Arguments  In this lecture, we'll discuss how to use the work we've been doing to determine whether or not arguments are logically valid or invalid; i.e., whether or not the truth of the conclusion necessarily follows from the truth of the hypotheses.    An argument is a sequence of statements.      All statements in an argument, except for the final one, are called premises (or assumptions or hypotheses ). The final statement is called the conclusion .      An argument is valid if the following is true: For any choice of statements substituted for the statement variables in the argument's premises, if the resulting premises are all true, then the conclusion is also true.     Modus Ponens   The following argument is valid:       We can prove this using a truth table:                                  The premise is true in rows 1, 3, and 4.  The premise is true in rows 1 and 2.  Thus, the premises are all true only in row 1.  The conclusion is true only in row 1.  Hence, all rows in which the premises are true, the conclusion is also true, and so the argument is valid.       Modus Tollens   The following argument is valid:       Prove this!      Show that the following argument is valid.       Again, we do this using a truth table:                                              The premise is true in rows 1, 3, and 4.  The premise is true in rows 1, 2, and 3.  Thus, the premises are all true only in rows 1 and 3.  The conclusion is true only in rows 1 and 3.  Hence, all rows in which the premises are true, the conclusion is also true, and so the argument is valid.      Arguments that are valid are also called rules of inference . Other rules of inference include:     Generalization:       Specialization:       Elimination:       Transitivity:       Proof by Division Into Cases:          Invalid Arguments    An argument that is not valid is called an invalid argument .      Errors in logic that produce invalid arguments are called logical fallacies .    We noted in the previous sections that contrapositives are logically equivalent to their corresponding conditional statements, but that converses and inveres are not. Using the converse or the inverse in an argument produces a logical fallacy.   Converse Error   The following argument is invalid:       You can prove that this is invalid by drawing a truth table and finding at least one row for which the premises are both true and the conclusion is not. It is also fairly easy to see intiuitively that this argument is invalid by producing an example that is clearly false by choosing and judiciously. For example,   If I love all branches of math, then I will love discrete mathematics.  I love discrete mathematics.  Therefore, I love all branches of math.   It is fairly easy to imagine a scenario in which someone loves discrete mathematics but does not like, say, differential equations. A computer scientist, for example, whose career replies on discrete objects might feel this way.     Inverse Error   The following argument is invalid:       Try to come up with a particular example that gives intuitive justification for the fact that this is a fallacy!      Sound vs Unsound Arguments  We've defined valid arguments via conditionals: an argument is valid if all premises being true implies the conclusion is true. This leaves room for an argument that is valid, but has false premises. In such cases, it is not possible to know, from the structure of the argument alone, if the argument is valid, since knowledge about the truth values of the premises is necessary.  In order to be sure that the conclusion of an argument is true regardless of the particular realizations of the premises, we need a more specific notion of validity.     An argument is called sound if, and only if, it is valid and all its premises are true.      An argument that is not sound is called unsound .     "
},
{
  "id": "valid-arguments-3",
  "level": "2",
  "url": "sec-1-3-valid-arguments.html#valid-arguments-3",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "  An argument is a sequence of statements.   "
},
{
  "id": "valid-arguments-4",
  "level": "2",
  "url": "sec-1-3-valid-arguments.html#valid-arguments-4",
  "type": "Definition",
  "number": "1.3.2",
  "title": "",
  "body": "  All statements in an argument, except for the final one, are called premises (or assumptions or hypotheses ). The final statement is called the conclusion .   "
},
{
  "id": "valid-arguments-5",
  "level": "2",
  "url": "sec-1-3-valid-arguments.html#valid-arguments-5",
  "type": "Definition",
  "number": "1.3.3",
  "title": "",
  "body": "  An argument is valid if the following is true: For any choice of statements substituted for the statement variables in the argument's premises, if the resulting premises are all true, then the conclusion is also true.   "
},
{
  "id": "valid-arguments-6",
  "level": "2",
  "url": "sec-1-3-valid-arguments.html#valid-arguments-6",
  "type": "Example",
  "number": "1.3.4",
  "title": "Modus Ponens.",
  "body": " Modus Ponens   The following argument is valid:       We can prove this using a truth table:                                  The premise is true in rows 1, 3, and 4.  The premise is true in rows 1 and 2.  Thus, the premises are all true only in row 1.  The conclusion is true only in row 1.  Hence, all rows in which the premises are true, the conclusion is also true, and so the argument is valid.     "
},
{
  "id": "valid-arguments-7",
  "level": "2",
  "url": "sec-1-3-valid-arguments.html#valid-arguments-7",
  "type": "Example",
  "number": "1.3.5",
  "title": "Modus Tollens.",
  "body": " Modus Tollens   The following argument is valid:       Prove this!   "
},
{
  "id": "valid-arguments-8",
  "level": "2",
  "url": "sec-1-3-valid-arguments.html#valid-arguments-8",
  "type": "Example",
  "number": "1.3.6",
  "title": "",
  "body": "  Show that the following argument is valid.       Again, we do this using a truth table:                                              The premise is true in rows 1, 3, and 4.  The premise is true in rows 1, 2, and 3.  Thus, the premises are all true only in rows 1 and 3.  The conclusion is true only in rows 1 and 3.  Hence, all rows in which the premises are true, the conclusion is also true, and so the argument is valid.     "
},
{
  "id": "valid-arguments-9",
  "level": "2",
  "url": "sec-1-3-valid-arguments.html#valid-arguments-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rules of inference "
},
{
  "id": "def-invalid-argument",
  "level": "2",
  "url": "sec-1-3-valid-arguments.html#def-invalid-argument",
  "type": "Definition",
  "number": "1.3.7",
  "title": "",
  "body": "  An argument that is not valid is called an invalid argument .   "
},
{
  "id": "def-logical-fallacy",
  "level": "2",
  "url": "sec-1-3-valid-arguments.html#def-logical-fallacy",
  "type": "Definition",
  "number": "1.3.8",
  "title": "",
  "body": "  Errors in logic that produce invalid arguments are called logical fallacies .   "
},
{
  "id": "ex-converse-error",
  "level": "2",
  "url": "sec-1-3-valid-arguments.html#ex-converse-error",
  "type": "Example",
  "number": "1.3.9",
  "title": "Converse Error.",
  "body": " Converse Error   The following argument is invalid:       You can prove that this is invalid by drawing a truth table and finding at least one row for which the premises are both true and the conclusion is not. It is also fairly easy to see intiuitively that this argument is invalid by producing an example that is clearly false by choosing and judiciously. For example,   If I love all branches of math, then I will love discrete mathematics.  I love discrete mathematics.  Therefore, I love all branches of math.   It is fairly easy to imagine a scenario in which someone loves discrete mathematics but does not like, say, differential equations. A computer scientist, for example, whose career replies on discrete objects might feel this way.   "
},
{
  "id": "ex-inverse-error",
  "level": "2",
  "url": "sec-1-3-valid-arguments.html#ex-inverse-error",
  "type": "Example",
  "number": "1.3.10",
  "title": "Inverse Error.",
  "body": " Inverse Error   The following argument is invalid:       Try to come up with a particular example that gives intuitive justification for the fact that this is a fallacy!   "
},
{
  "id": "sound-vs-unsound-arguments-4",
  "level": "2",
  "url": "sec-1-3-valid-arguments.html#sound-vs-unsound-arguments-4",
  "type": "Definition",
  "number": "1.3.11",
  "title": "",
  "body": "  An argument is called sound if, and only if, it is valid and all its premises are true.   "
},
{
  "id": "sound-vs-unsound-arguments-5",
  "level": "2",
  "url": "sec-1-3-valid-arguments.html#sound-vs-unsound-arguments-5",
  "type": "Definition",
  "number": "1.3.12",
  "title": "",
  "body": "  An argument that is not sound is called unsound .   "
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
  "body": " The Prime Numbers  Much of modern number theory is concerned with the nature and distribution prime numbers , in no small part because they can be considered the \"building blocks\" of the positive integers in much the same way that atoms can be considered the building blocks of molecules in chemistry. As such, it behooves us to spend some time talking about them here.    An integer is called a prime number if its only positive factors are and . A positive integer greater than that is not prime is called composite .    Said another way, if is prime, then implies .  You might ask why is not considered prime. Hold on to this quesiton.  To (naïvly) check if a number is prime, you would need to check if for every positive integer . But this is far more work than is actually needed. In fact, it turns out that every positive integer is divisible by at least one prime, and therefore one need only check if for each of the primes . This is illustrated by the following theorem.    Any integer is divisible by a prime number.    Coming soon...    For example, is composite since, e.g., . That is, . But both and are composite too, since and . Recursivly applying , one finds: Critically, each of the remaining factors is prime. We can apply this same recursive logic to any integer greater than 1 and arrive at the same result. Each integer can be factored into a product of primes. And, in fact, that decomposition into a product of primes is unique (up to the ordering of the factors). This result, trivial though it may sound, is so significant that mathematicians have given it the pompous name of the \"Fundamental Theorem of Arithmetic.\"   Fundamental Theorem of Arithmetic   Every integer greater than 1 can be written uniquely (up to reordering) as a product of prime numbers.    Not happening.    That is, one can write any integer in the following way: where each is a prime number and each is a nonnegative integer. Uniqueness up to reordering means that, for any integer , the decomposition into primes is fixed, but since multiplication is commutative, the ordering of the factors is not.   is one of the reasons we exclude from the list of primes. If we were to include as a prime, the theorem would be false, since any integer can be written as: for any arbitrary , and thus uniqueness is violated. If you continue your study of number theorey beyond this class, you will find more and more examples like this one that make the exclusion of feel natural.  As you move further and further along in the list of positive integers, you will find that primes become less and less common. For example, between and , there are four primes ( ), but between and , there is only one ( ). This may feel like a convincing argument that there are finitely many primes, but this is in fact false. The infinitude of the primes has been known since the days of Euclid, and we'll prove this using the same proof he did.    There are infinitely many prime numbers.    Suppose by way of contradiction that there are finitely many primes. Then, we can enumerate them in a set: Consider the positive integer: Since is an integer greater than , we have from that there exists a prime such that . However, since is finite, we have . Then, .  From part 1 of , and implies . From , we find that this implies , which is a contradiction. Thus, there must be infinitely many primes.    Even though there are infinitely many primes, their density among the naturals vanishes rapidly once you move far enough away from zero. If denotes the number of prime numbers less than or equal to , then we have the following result from the study of analytic number theory :   Prime Number Theorem      Not happening.    This tells us that as gets larger and larger, becomes a better and better approximation of the number of prime numbers less than or equal to .  "
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
  "body": " Fundamental Theorem of Arithmetic   Every integer greater than 1 can be written uniquely (up to reordering) as a product of prime numbers.    Not happening.   "
},
{
  "id": "thm-subsequent-ints",
  "level": "2",
  "url": "sec-5-2-primes.html#thm-subsequent-ints",
  "type": "Theorem",
  "number": "5.2.4",
  "title": "",
  "body": "  There are infinitely many prime numbers.    Suppose by way of contradiction that there are finitely many primes. Then, we can enumerate them in a set: Consider the positive integer: Since is an integer greater than , we have from that there exists a prime such that . However, since is finite, we have . Then, .  From part 1 of , and implies . From , we find that this implies , which is a contradiction. Thus, there must be infinitely many primes.   "
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
  "body": " The Division Algorithm  When working with relatively small numbers, determining whether or not is not a difficult task. But what if you were asked to determine if ? How would you do it?  One way is list all of the multiples of the divisor until you meet or exceed the dividend. In our case:     In the penultimate step, the product was smaller than our target, but in the final step, the product exceeded it. That means that:     But we can do better. Notice that:     This allows us to write:     In this context, is known as the quotient and is known as the remainder when is divided by . Note that this is the same quotient and remainder you would have gotten if you used the standard division-with-remainder process you learned when you were younger.  We formalize this idea below.   The Division Algorithm   Let be integers with . Then, there exist unique integers and , with , such that .    Omitted, but the intuition above is the important takeaway.      In the context of , is called the divisor , is called the dividend , is called the quotient , and is called the remainder . We write:         Find the quotient and remainder when:    is divided by .  is divided by .      Remember, by definition!      We write , and so and .  We write , and so and .      The solution to part 2 may have been counterintuitive to you. Your instict may have been to write , similar to part (a). While this is perfectly valid, mathematically, this does not satisfy the condition in that . The remainder, under these conventions, is always nonnegative. This convention may seem arbitrary (and in some sense, it is), but it gives us a very nice property: for a fixed integer , the function such that generates a partition of the integers. We will explore this in the next section.    If today is Tuesday, what day will it be 1000 days from today?    The day of the week repeats every seven days. We're not really interested in how many times we cycle through those seven days, we just need to know how many days we go over on the very last cycle. Said another way, we need to find the remainder when 1000 is divided by 7.  Note that . Therefore, 1000 days after today occurs 142 weeks and 6 days from today. Six days after Tuesday is Monday, so if today is Tuesday, then it will be a Monday in 1000 days.    "
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
  "id": "ex-div-alg",
  "level": "2",
  "url": "sec-5-3-division-algorithm.html#ex-div-alg",
  "type": "Example",
  "number": "5.3.3",
  "title": "",
  "body": "  Find the quotient and remainder when:    is divided by .  is divided by .      Remember, by definition!      We write , and so and .  We write , and so and .     "
},
{
  "id": "ex-mod-practice",
  "level": "2",
  "url": "sec-5-3-division-algorithm.html#ex-mod-practice",
  "type": "Example",
  "number": "5.3.4",
  "title": "",
  "body": "  If today is Tuesday, what day will it be 1000 days from today?    The day of the week repeats every seven days. We're not really interested in how many times we cycle through those seven days, we just need to know how many days we go over on the very last cycle. Said another way, we need to find the remainder when 1000 is divided by 7.  Note that . Therefore, 1000 days after today occurs 142 weeks and 6 days from today. Six days after Tuesday is Monday, so if today is Tuesday, then it will be a Monday in 1000 days.   "
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
