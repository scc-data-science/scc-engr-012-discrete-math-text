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
  "body": " Divisibility      If and are integers with , we say that  divides  if there exists an integer such that . That is, divides if is an integer. If divides , we write .  In this context, is called the divisor and is called the multiple or sometimes the dividend .    Note that \" \" is a statement ; it is either true or false. Contrast this with notation like \" ,\" which represents the mathematical operation implied by \" .\" As such, we would never write something like \" = 2.\" Instead, we would say something like \" because .\"  Similarly, you'll want to avoid writing expressions like \" ,\" because this would be read as \" divides the quantity is equal to divides ,\" which is clearly not what we are intending to communicate.  Some additional comments about :     If , we might say that \" is a multiple of \" or that \" is a factor of .\"    \" \" is equivalent to the more familiar \" is divisible by .\"    If it is not the case that , we write .         Is divisible by ?  Does ?  Does divide ?  Is a multiple of ?        Yes, since .  Yes, since .  Yes, since .  Yes, since .      The sub-problems in are all asking essentially the same question, just in different ways. In number theory and related mathematical applications, we almost exclusively use the notion of divides , since it allows us to discuss division in terms of multiplication.       If , does ?    If , does ?       Remember, if and for some integer .       No. By definition, implies . Said another way, implies . isn't even defined.    Yes. In this case, , so .       The following theorem will be useful in a future section, so we'll state it and prove it here.    For all integers and , if and are positive and , then .    Suppose and are positive integers such that . Then, there exists an integer such that . Moreover, (and hence ) since . Therefore, .      The only divisors of are and .    Note that , and so . Similarly, , and so .  Now, suppose is another integer that divides . Then, there exists an integer such that . Note that since is positive, and are either both positive or both negative. Assume without loss of generality that both and are positive (the argument would be identical if they were both negative; I would encourage you to think about why). Hence, is positive, and therefore, by , . Since is a positive integer, we conclude .    Some of the basic properties of divisibility are summarized in the theorem below.    Let , , and be integers with . Then:    If and , then .  If and , then for any integers and .  If , then for any integer .  If and , then .  If and , then .      Let , , and be integers with .     Suppose and . Then there exists integers and such that and . Then, and so .    Left as an exercise.    Suppose . Then there exists an integer such that . Then, and so .    Left as an exercise.    Left as an exercise.       "
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
  "body": "  Let , , and be integers with . Then:    If and , then .  If and , then for any integers and .  If , then for any integer .  If and , then .  If and , then .      Let , , and be integers with .     Suppose and . Then there exists integers and such that and . Then, and so .    Left as an exercise.    Suppose . Then there exists an integer such that . Then, and so .    Left as an exercise.    Left as an exercise.      "
},
{
  "id": "sec-5-2-primes",
  "level": "1",
  "url": "sec-5-2-primes.html",
  "type": "Section",
  "number": "5.2",
  "title": "The Prime Numbers",
  "body": " The Prime Numbers  Much of modern number theory is concerned with the nature and distribution prime numbers , in no small part because they can be considered the \"building blocks\" of the positive integers in much the same way that atoms can be considered the building blocks of molecules in chemistry. As such, it behooves us to spend some time talking about them here.    An integer is called a prime number if its only positive factors are and . A positive integer greater than that is not prime is called composite .    Said another way, if is prime, then implies .  You might ask why is not considered prime. Hold on to this question.  To (naïvly) check if a number is prime, you would need to check if for every positive integer . But this is far more work than is actually needed. In fact, it turns out that every positive integer is divisible by at least one prime, and therefore one need only check if for each of the primes . This is illustrated by the following theorem.    Any integer is divisible by a prime number.    Coming soon...    For example, is composite since, e.g., . That is, . But both and are composite too, since and . Recursivly applying , one finds: Critically, each of the remaining factors is prime. We can apply this same recursive logic to any integer greater than 1 and arrive at the same result. Each integer can be factored into a product of primes. And, in fact, that decomposition into a product of primes is unique (up to the ordering of the factors). This result, trivial though it may sound, is so significant that mathematicians have given it the pompous name of the \"Fundamental Theorem of Arithmetic.\"   Fundamental Theorem of Arithmetic   Every integer greater than 1 can be written uniquely (up to reordering) as a product of prime numbers.    Not happening.    That is, one can write any integer in the following way: where each is a prime number and each is a nonnegative integer. Uniqueness up to reordering means that, for any integer , the decomposition into primes is fixed, but since multiplication is commutative, the ordering of the factors is not.   is one of the reasons we exclude from the list of primes. If we were to include as a prime, the theorem would be false, since any integer can be written as: for any arbitrary , and thus uniqueness is violated. If you continue your study of number theorey beyond this class, you will find more and more examples like this one that make the exclusion of feel natural.  As you move further and further along in the list of positive integers, you will find that primes become less and less common. For example, between and , there are four primes ( ), but between and , there is only one ( ). This may feel like a convincing argument that there are finitely many primes, but this is in fact false. The infinitude of the primes has been known since the days of Euclid, and we'll prove this using the same proof he did.    There are infinitely many prime numbers.    Suppose by way of contradiction that there are finitely many primes. Then, we can enumerate them in a set: Consider the positive integer: Since is an integer greater than , we have from that there exists a prime such that . However, since is finite, we have . Then, .  From part 1 of , and implies . From , we find that this implies , which is a contradiction. Thus, there must be infinitely many primes.    Even though there are infinitely many primes, their density among the naturals vanishes rapidly once you move far enough away from zero. If denotes the number of prime numbers less than or equal to , then we have the following result from the study of analytic number theory :   Prime Number Theorem      Not happening.    This tells us that as gets larger and larger, becomes a better and better approximation of the number of prime numbers less than or equal to .  "
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
  "body": " The Division Algorithm   When working with relatively small numbers, determining whether or not is not a difficult task. But what if you were asked to determine if ? How would you do it?    The Division Algorithm  One way is list all of the multiples of the divisor until you meet or exceed the dividend. In our case:     In the penultimate step, the product was smaller than our target, but in the final step, the product exceeded it. That means that:     But we can do better. Notice that:     This allows us to write:     In this context, is known as the quotient and is known as the remainder when is divided by . Note that this is the same quotient and remainder you would have gotten if you used the standard division-with-remainder process you learned when you were younger.  We formalize this idea below.   The Division Algorithm   Let be integers with . Then, there exist unique integers and , with , such that .    Omitted, but the intuition above is the important takeaway.      In the context of , is called the divisor , is called the dividend , is called the quotient , and is called the remainder . We write:         Find the quotient and remainder when:    is divided by .  is divided by .      Remember, by definition!      We write , and so and .  We write , and so and .      The solution to part 2 may have been counterintuitive. Your instict may have been to write , similar to part (a). While this is perfectly valid, mathematically, this does not satisfy the condition in that . The remainder, under these conventions, is always nonnegative. This convention may seem arbitrary (and in some sense, it is), but it gives us a very nice property: for a fixed integer , the function such that generates a partition of the integers. We will explore this in the next section.    If today is Tuesday, what day will it be 1000 days from today?    The day of the week repeats every seven days. We're not really interested in how many times we cycle through those seven days, we just need to know how many days we go over on the very last cycle. Said another way, we need to find the remainder when 1000 is divided by 7.  Note that . Therefore, 1000 days after today occurs 142 weeks and 6 days from today. Six days after Tuesday is Monday, so if today is Tuesday, then it will be a Monday in 1000 days.      The Greatest Common Divisor  We now switch gears and introduce one of the most important concepts in elementary number theory: the greatest common divisor .  Let and be integers. A divisor of is an integer such that . A common divisor of and is a divisor of and simmultaneously. It stands to reason that if and have any common divisors, they have a largest one.    Let and be integers. The greatest common divisor of and is an integer satisfying the following properties:     ;   and ;  Whenever and , we have .    We write . If , we say that and are relatively prime .    Property 2 of asserts that is a common divisor of and , while Property 3 asserts that is the largest common divisor of and (since all other common divisors also divide ).  It is not immediately clear from this definition that a gcd always exists or, assuming that it does exist, that it is unique. Proving this fact is actually rather challenging insofar as most proofs require a good deal of cleverness. We present one such proof below.    Let and be integers that are not both zero. Then exists and is unique.    Consider the set of all integer linear combinations of and :     Note that contains at least one positive element, since it contains the integers , , , and . Let be the smallest positive element in . We claim that .  By definition, implies for some integers and . In order to show that , we need to verify Properties 1, 2, and 3 of . We know that by definition, so Property 1 is satisfied. If any other integer , if and , then by , so Property 3 is satisfied. To show that , we use the division algorithm ( ) to write:     where . Our goal therefore reduces to showing that . Indeed,     Thus, . But this is a contradiction, since we assumed was the smallest positive element in and we know . Thus, by contradiciton, we conclude and therefore . The proof that is identical. Thus, Property 2 is satisfied, and we conclude .    From the proof of we have the following exceedingly important corollary:    There exists integers and such that:     The corollary above will become extremely useful in a later section when we start to talk about the Extended Euclidean Algorithm and modular inverses. For now, it is an interesting observation.    The Euclidean Algorithm  A naïve the calculate the greatest common divisor is to calculate all of the divisors of and of , find the intersection of the two sets, and report the largest element. However, in most real-world applications of number theory (e.g., cryptography), we are working with , so doing this is not feasible. It turns out, we can use the division algorithm to help us.    Suppose and are positive integers with . Then, .    Our strategy will be to show that all of the common divisors are the same, and hence the greatest is also the same. As such, we will show that is a common divisor of and if and only if it is a common divisor of and .   Assume and . Since , we have . Then, . Since and , we have . Thus, and implies and .   Left as an exercise. (Hint: Run the argument above in reverse.)    This is a truly amazing result, because it allows us to recursively simplify a hard problem until it is easy. From here on, our strategy for calculating will be to successively long-divide until the process naturally terminates. In particular,    Long-divide and to get so that .  Long-divide and to get so that .  Long-divide and to get so that .  Proceed inductively.    Eventually, this process will terminate with , so that:       Find the greatest common divisor of and .    We run the algorithm above.     Hence .    The example illustrates how powerful this concept is. Even if you asked a computer to find the greatest common divisor of two large numbers by the naïve method, it would struggle to resolve quickly. However, you implemented the above algorithm, it would compute the gcd very fast.  The algorithm defined above to compute the gcd through successive applications of the division algorithm is called the Euclidean algorithm and is very important in number theory.   "
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
  "id": "def-gcd",
  "level": "2",
  "url": "sec-5-3-division-algorithm.html#def-gcd",
  "type": "Definition",
  "number": "5.3.5",
  "title": "",
  "body": "  Let and be integers. The greatest common divisor of and is an integer satisfying the following properties:     ;   and ;  Whenever and , we have .    We write . If , we say that and are relatively prime .   "
},
{
  "id": "thm-gcd-exists",
  "level": "2",
  "url": "sec-5-3-division-algorithm.html#thm-gcd-exists",
  "type": "Theorem",
  "number": "5.3.6",
  "title": "",
  "body": "  Let and be integers that are not both zero. Then exists and is unique.    Consider the set of all integer linear combinations of and :     Note that contains at least one positive element, since it contains the integers , , , and . Let be the smallest positive element in . We claim that .  By definition, implies for some integers and . In order to show that , we need to verify Properties 1, 2, and 3 of . We know that by definition, so Property 1 is satisfied. If any other integer , if and , then by , so Property 3 is satisfied. To show that , we use the division algorithm ( ) to write:     where . Our goal therefore reduces to showing that . Indeed,     Thus, . But this is a contradiction, since we assumed was the smallest positive element in and we know . Thus, by contradiciton, we conclude and therefore . The proof that is identical. Thus, Property 2 is satisfied, and we conclude .   "
},
{
  "id": "cor-extended-gcd",
  "level": "2",
  "url": "sec-5-3-division-algorithm.html#cor-extended-gcd",
  "type": "Corollary",
  "number": "5.3.7",
  "title": "",
  "body": "  There exists integers and such that:    "
},
{
  "id": "thm-div-alg-gcd",
  "level": "2",
  "url": "sec-5-3-division-algorithm.html#thm-div-alg-gcd",
  "type": "Theorem",
  "number": "5.3.8",
  "title": "",
  "body": "  Suppose and are positive integers with . Then, .    Our strategy will be to show that all of the common divisors are the same, and hence the greatest is also the same. As such, we will show that is a common divisor of and if and only if it is a common divisor of and .   Assume and . Since , we have . Then, . Since and , we have . Thus, and implies and .   Left as an exercise. (Hint: Run the argument above in reverse.)   "
},
{
  "id": "ex-euclid-alg",
  "level": "2",
  "url": "sec-5-3-division-algorithm.html#ex-euclid-alg",
  "type": "Example",
  "number": "5.3.9",
  "title": "",
  "body": "  Find the greatest common divisor of and .    We run the algorithm above.     Hence .   "
},
{
  "id": "sec-5-4-modular-arithmetic",
  "level": "1",
  "url": "sec-5-4-modular-arithmetic.html",
  "type": "Section",
  "number": "5.4",
  "title": "Modular Arithmetic",
  "body": " Modular Arithmetic   In the last section, we remaked that, for a fixed integer , the function such that generates a partition of the integers. We make this idea formal here.    Residue Classes Modulo  We'll illustrate this using an example. Consider the function given by . Then, following closely, notice that:     We see that and that for any . As we saw in Homework 4, this implies that division by 3 partitions the integers into nonoverlapping sets. We call these sets residue classes modulo 3 .  Since all of the numbers in a given residue class behave the same way under , we might consider each of these numbers to be equivalent in some sense. For example, since , and are the same up to division by . We capture this equivalence with the following definition.    Modular Arithmetic    If and are integers and is a positive integer, then is congruent to modulo if . If is congruent to modulo , we write .      Determine whether    is congruent to modulo .  is congruent to module .        Since divides , we have .  Since does not divide , we have .       tells us how to map between the world of congruences and the world of equations. Being able quickly code switch between the two is an important skill in number theory.    Let and be integers and be a positive integer. Then is congruent to modulo if any only if there exists an integer such that .      Suppose . Then , and so there exists an integer such that . Therefore, .   Suppose for some integer . Then equivalently , and hence . Hence, .    If this is really a meaningful notion of equivalence, then it should preserve some of the arithmetic structure that we're used to from normal quality. That is, we should be able to add, subtract, and multiply. And indeed, we can!    Suppose and . Then:     .   .   .      Homework.    The above is actually quite powerful. In standard arithmetic, in order to preserve equality, we have to do the same thing to both sides of an equation. In modular arithmetic, The numbers you apply to each side of a congruence can be different, as long as they are part of the same residue class modulo . This allows us to answer questions about extremely large numbers computationally efficiently.    Find the remainder when is divided by .    Note that you could just use the division algorithm. These numbers are not large, so it would not take too much time. However, to illustrate the utility of , we'll use modular arithmetic.  Note that we can write exlicitly the decimal expansion of :     Now, to find the remainder upon division by , we need to find . That is, we need to find such that . The reason the decimal expansion is useful here is because . Moreover, from , for any positive integer . So:     It turns out, is divisible by .      Find the remainder when is divided by .    The reason a decimal expansion (i.e., base 10) was so useful in was because . What base might be useful here?      Find the remainder when is divided by .    Here's an example of a type of number with which you cannot reasonably use the division algorithm. , which is far too large to deal with by hand in regular settings. However, with modular arithmetic, it is much more manageable. Let's look at the first few powers of modulo 5:     So, ! We can use this to make our problem much, much easier. Notice that , and so if , then:     And so has remainder when divided by .      Find the remainder when is divided by .    Exploring the powers of modulo may take a littler longer than it did in the previous example. Don't give up!      If you did , you hopefully found that there is a number such that . In , we found that . It turns out, the base does not matter; for any (for the particular value of you found in ), and simialry for any .  Can you conjecture a relationship between the exponent and the modulus? Does it hold for any modulus? For what kinds of moduli does it seem to hold?    Homework.     leads to a natural question. We can add, subtract, and multiply numbers in modular arithmetic. Can we divide? It turns out, not always, but more frequently than you might think. Hold on to this question, as this will be one of the topics for next week.   "
},
{
  "id": "def-congruence",
  "level": "2",
  "url": "sec-5-4-modular-arithmetic.html#def-congruence",
  "type": "Definition",
  "number": "5.4.1",
  "title": "",
  "body": "  If and are integers and is a positive integer, then is congruent to modulo if . If is congruent to modulo , we write .   "
},
{
  "id": "ex-congruence",
  "level": "2",
  "url": "sec-5-4-modular-arithmetic.html#ex-congruence",
  "type": "Example",
  "number": "5.4.2",
  "title": "",
  "body": "  Determine whether    is congruent to modulo .  is congruent to module .        Since divides , we have .  Since does not divide , we have .     "
},
{
  "id": "thm-congruence-equation",
  "level": "2",
  "url": "sec-5-4-modular-arithmetic.html#thm-congruence-equation",
  "type": "Theorem",
  "number": "5.4.3",
  "title": "",
  "body": "  Let and be integers and be a positive integer. Then is congruent to modulo if any only if there exists an integer such that .      Suppose . Then , and so there exists an integer such that . Therefore, .   Suppose for some integer . Then equivalently , and hence . Hence, .   "
},
{
  "id": "thm-mod-arith",
  "level": "2",
  "url": "sec-5-4-modular-arithmetic.html#thm-mod-arith",
  "type": "Theorem",
  "number": "5.4.4",
  "title": "",
  "body": "  Suppose and . Then:     .   .   .      Homework.   "
},
{
  "id": "ex-mod-arithmetic-add",
  "level": "2",
  "url": "sec-5-4-modular-arithmetic.html#ex-mod-arithmetic-add",
  "type": "Example",
  "number": "5.4.5",
  "title": "",
  "body": "  Find the remainder when is divided by .    Note that you could just use the division algorithm. These numbers are not large, so it would not take too much time. However, to illustrate the utility of , we'll use modular arithmetic.  Note that we can write exlicitly the decimal expansion of :     Now, to find the remainder upon division by , we need to find . That is, we need to find such that . The reason the decimal expansion is useful here is because . Moreover, from , for any positive integer . So:     It turns out, is divisible by .   "
},
{
  "id": "ex-mod-arithmetic-add-2",
  "level": "2",
  "url": "sec-5-4-modular-arithmetic.html#ex-mod-arithmetic-add-2",
  "type": "Exercise",
  "number": "5.4.6",
  "title": "",
  "body": "  Find the remainder when is divided by .    The reason a decimal expansion (i.e., base 10) was so useful in was because . What base might be useful here?   "
},
{
  "id": "ex-mod-arithmetic-power",
  "level": "2",
  "url": "sec-5-4-modular-arithmetic.html#ex-mod-arithmetic-power",
  "type": "Example",
  "number": "5.4.7",
  "title": "",
  "body": "  Find the remainder when is divided by .    Here's an example of a type of number with which you cannot reasonably use the division algorithm. , which is far too large to deal with by hand in regular settings. However, with modular arithmetic, it is much more manageable. Let's look at the first few powers of modulo 5:     So, ! We can use this to make our problem much, much easier. Notice that , and so if , then:     And so has remainder when divided by .   "
},
{
  "id": "ex-mod-arithmetic-power-2",
  "level": "2",
  "url": "sec-5-4-modular-arithmetic.html#ex-mod-arithmetic-power-2",
  "type": "Exercise",
  "number": "5.4.8",
  "title": "",
  "body": "  Find the remainder when is divided by .    Exploring the powers of modulo may take a littler longer than it did in the previous example. Don't give up!   "
},
{
  "id": "subsec-mod-arith-13",
  "level": "2",
  "url": "sec-5-4-modular-arithmetic.html#subsec-mod-arith-13",
  "type": "Example",
  "number": "5.4.9",
  "title": "",
  "body": "  If you did , you hopefully found that there is a number such that . In , we found that . It turns out, the base does not matter; for any (for the particular value of you found in ), and simialry for any .  Can you conjecture a relationship between the exponent and the modulus? Does it hold for any modulus? For what kinds of moduli does it seem to hold?    Homework.   "
},
{
  "id": "sec-5-5-modular-division",
  "level": "1",
  "url": "sec-5-5-modular-division.html",
  "type": "Section",
  "number": "5.5",
  "title": "Modular Division",
  "body": " Modular Division   In the previous section, we discussed addition, subtraction, and multiplication modulo . Here, we discuss when it is possible to divide modulo .    What is Division?  How do we formally define division in standard arithmetic? We do it through multiplication. Note:     What, then, is ? It is the unique solution to the equation:     We define division in modular arithmetic the same way. In general, to divide by :    Solve (mod ) to get .  Multiple by .      Modular Inverses    Let and . Then:     There exists some such that (mod ) if and only if .    If (mod ), then (mod ).     If such a number exists, then we write and call it the inverse of modulo .         Suppose . Then, by , there exists integers and such that . Therefore, (mod ). Letting completes the proof.   Assume (mod ). Then there exists an integer such that , which implies . We know from the proof of that and therefore . Hence, .     Notice:     Hence, (mod ).        Division by modulo    We know that , so exists modulo . What is it?    One way to do this is to guess and check.     Hence, (mod ).    The strategy used in works for small numbers, but if we're working with , it is not feasible. In those cases, we can use the Euclidean algorithm!   Division by modulo    Use the Euclidean algorithm to find modulo .     Step 1 : Run the Euclidean algorithm:      Step 2 : Solve each equation above for the remainders, starting from the top. Let and . Then:      Step 3 : Reduce modulo .     Since (mod ). Thus, modulo .    The process outlined in is referred to as the extended Euclidean algorithm and is the practical standard for computing modular inverses for moduli .   "
},
{
  "id": "thm-mod-div",
  "level": "2",
  "url": "sec-5-5-modular-division.html#thm-mod-div",
  "type": "Theorem",
  "number": "5.5.1",
  "title": "",
  "body": "  Let and . Then:     There exists some such that (mod ) if and only if .    If (mod ), then (mod ).     If such a number exists, then we write and call it the inverse of modulo .         Suppose . Then, by , there exists integers and such that . Therefore, (mod ). Letting completes the proof.   Assume (mod ). Then there exists an integer such that , which implies . We know from the proof of that and therefore . Hence, .     Notice:     Hence, (mod ).      "
},
{
  "id": "ex-div-by-2",
  "level": "2",
  "url": "sec-5-5-modular-division.html#ex-div-by-2",
  "type": "Example",
  "number": "5.5.2",
  "title": "Division by <span class=\"process-math\">\\(2\\)<\/span> modulo <span class=\"process-math\">\\(5\\)<\/span>.",
  "body": " Division by modulo    We know that , so exists modulo . What is it?    One way to do this is to guess and check.     Hence, (mod ).   "
},
{
  "id": "ex-div-by-17",
  "level": "2",
  "url": "sec-5-5-modular-division.html#ex-div-by-17",
  "type": "Example",
  "number": "5.5.3",
  "title": "Division by <span class=\"process-math\">\\(17\\)<\/span> modulo <span class=\"process-math\">\\(74\\)<\/span>.",
  "body": " Division by modulo    Use the Euclidean algorithm to find modulo .     Step 1 : Run the Euclidean algorithm:      Step 2 : Solve each equation above for the remainders, starting from the top. Let and . Then:      Step 3 : Reduce modulo .     Since (mod ). Thus, modulo .   "
},
{
  "id": "sec-5-6-diophantine-equations-and-congruences",
  "level": "1",
  "url": "sec-5-6-diophantine-equations-and-congruences.html",
  "type": "Section",
  "number": "5.6",
  "title": "Diophantine Equations and Congruences",
  "body": " Diophantine Equations and Congruences   Diophantine Equations  A special class of equations that are of interest to number theorists are those called Diophantine equations , which are polynomial equation with integer coefficients for which only integer solutions are of interest.  These range quite substantially in difficulty. Perhaps the most famous Diophantine equation is the equation:     for unkowns . The solutions to this equation are the Pythagorean triples . Some solutions are , , etc. In fact, you could probably name quite a few solutions to this equation off the top of your head.  However, if we increase the exponents, even by one, the problem suddenly becomes much harder.   Fermat's Last Theorem   The Diophantine equation has no nontrivial solutions for .    Definitely not happening.    Even though the two equations above are very similar, one has infinitely many solutions, and the other has none. One is trivial to exhibit solutions, and the other took almost 400 years to prove that no solution existed.  As you might imagine, it is very difficult in general to solve Diophantine equations, in much the same way as it is very difficult to solve differential equations in calculus. However, there are a few distinct classes of Diophantine equations that we definitely can solve, and we can employ modular arithmetic to do so.    If a Diophantine equation of the form has solution , then (mod ) for every .    Follows from the fact that (mod ) for every .     is not particularly surprising, but its contrapositive can be very useful.    Show that the Diophantine equation has no solutions.    If we want to employ , the trick is to find a modulus for which reducing modulo yields a much simpler problem. In this case, we can get rid of the term if we reduce mod . Consider, then, the congruence found by reducing both sides of our equation modulo :     Is there a solution to this congruence? Well, notice:     Therefore, there is no number that squares to modulo , so the congruence has no solutions. Thus, by the contrapositive of , the Diophantine equation has no solutions.    It is for reasons like the one above that knowing how to solve congruences is of particular interest. As such, we'll spend the rest of this section talking about how to solve certain classes of congruences.    Congruences of the form (mod )  We already know how to solve these kinds of congruences when ; we just apply to find modulo . Then,     Hence, (mod ), meaning that the solution is unique up to a multiple of .  So what if ? Well, if (mod ), then there exists an integer such that , and so . But, by the proof of , we know that for some integer . Hence, our equation reduces to:     This equation has an integer solution if and only if , which means (mod ) has a solution if and only if .    The congruence (mod ) has a solution if and only if .    The linear congruence is logically equivalent to the existence of integers and such that: Let .   Assume a solution exists. By definition, and . Since divides both coefficients, it must divide any integer linear combination of them: Because , it follows directly that .   Assume . This implies for some integer . By , there exist integers and such that: Multiplying both sides of this identity by yields: Substituting gives: Rewriting this equation modulo , the term becomes , leaving: Thus, is an integer solution to the congruence.    So, if a solution exists, how do we find it? We could guess-and-check, but as we have mentioned, this does not scale particularly well. It turns out, we can reduce the case in which to the case in which by dividing everything by .    To solve when :   Step 1 : Reduce the congruence:     Now, .   Step 2 : Find a particular solution of the congruence . Since , we can compute modulo and write:      Step 3 : Generate all solutions modulo by converting the above to an equation and reducing modulo . That is,     is the set of mutually incongruent solutions modulo .      Find all solutions to .     Step 1 : Reduce the congruence.  First, we find the greatest common divisor of and : Since , a solution exists, and there will be exactly mutually incongruent solutions modulo . We reduce the congruence by dividing , , and by :    Step 2 : Find the particular solution .  We now find the modular inverse of . Since , the inverse is . Multiplying both sides by yields: Thus, our particular solution is .   Step 3 : Generate all solutions modulo .  The complete set of solutions modulo the original modulus is generated by adding multiples of the reduced modulus :   So:     Therefore, the three distinct solutions are .     "
},
{
  "id": "thm-flt",
  "level": "2",
  "url": "sec-5-6-diophantine-equations-and-congruences.html#thm-flt",
  "type": "Theorem",
  "number": "5.6.1",
  "title": "Fermat’s Last Theorem.",
  "body": " Fermat's Last Theorem   The Diophantine equation has no nontrivial solutions for .    Definitely not happening.   "
},
{
  "id": "thm-5-6-dio-to-mod",
  "level": "2",
  "url": "sec-5-6-diophantine-equations-and-congruences.html#thm-5-6-dio-to-mod",
  "type": "Theorem",
  "number": "5.6.2",
  "title": "",
  "body": "  If a Diophantine equation of the form has solution , then (mod ) for every .    Follows from the fact that (mod ) for every .   "
},
{
  "id": "ex-5-6-dio-to-mod",
  "level": "2",
  "url": "sec-5-6-diophantine-equations-and-congruences.html#ex-5-6-dio-to-mod",
  "type": "Example",
  "number": "5.6.3",
  "title": "",
  "body": "  Show that the Diophantine equation has no solutions.    If we want to employ , the trick is to find a modulus for which reducing modulo yields a much simpler problem. In this case, we can get rid of the term if we reduce mod . Consider, then, the congruence found by reducing both sides of our equation modulo :     Is there a solution to this congruence? Well, notice:     Therefore, there is no number that squares to modulo , so the congruence has no solutions. Thus, by the contrapositive of , the Diophantine equation has no solutions.   "
},
{
  "id": "thm-5-6-solve-ax-equiv-b",
  "level": "2",
  "url": "sec-5-6-diophantine-equations-and-congruences.html#thm-5-6-solve-ax-equiv-b",
  "type": "Theorem",
  "number": "5.6.4",
  "title": "",
  "body": "  The congruence (mod ) has a solution if and only if .    The linear congruence is logically equivalent to the existence of integers and such that: Let .   Assume a solution exists. By definition, and . Since divides both coefficients, it must divide any integer linear combination of them: Because , it follows directly that .   Assume . This implies for some integer . By , there exist integers and such that: Multiplying both sides of this identity by yields: Substituting gives: Rewriting this equation modulo , the term becomes , leaving: Thus, is an integer solution to the congruence.   "
},
{
  "id": "alg-complex-congruence",
  "level": "2",
  "url": "sec-5-6-diophantine-equations-and-congruences.html#alg-complex-congruence",
  "type": "Algorithm",
  "number": "5.6.5",
  "title": "",
  "body": "  To solve when :   Step 1 : Reduce the congruence:     Now, .   Step 2 : Find a particular solution of the congruence . Since , we can compute modulo and write:      Step 3 : Generate all solutions modulo by converting the above to an equation and reducing modulo . That is,     is the set of mutually incongruent solutions modulo .   "
},
{
  "id": "ex-5-6-ax-equiv-b-with-gcd",
  "level": "2",
  "url": "sec-5-6-diophantine-equations-and-congruences.html#ex-5-6-ax-equiv-b-with-gcd",
  "type": "Example",
  "number": "5.6.6",
  "title": "",
  "body": "  Find all solutions to .     Step 1 : Reduce the congruence.  First, we find the greatest common divisor of and : Since , a solution exists, and there will be exactly mutually incongruent solutions modulo . We reduce the congruence by dividing , , and by :    Step 2 : Find the particular solution .  We now find the modular inverse of . Since , the inverse is . Multiplying both sides by yields: Thus, our particular solution is .   Step 3 : Generate all solutions modulo .  The complete set of solutions modulo the original modulus is generated by adding multiples of the reduced modulus :   So:     Therefore, the three distinct solutions are .   "
},
{
  "id": "sec-5-7-sunzi",
  "level": "1",
  "url": "sec-5-7-sunzi.html",
  "type": "Section",
  "number": "5.7",
  "title": "Sunzi’s Theorem",
  "body": " Sunzi's Theorem   In the previous section, we discussed how we might solve some linear congruences. In this section, we concern ourselves with systems of linear congruences. That is, can we find a procedure to find solutions to:     It turns out, like many of our results in number theory, a solution exists provided that the moduli are pairwise coprime.    Sunzi's Theorem  We start with a motivating example.    Suppose:     What is ?    Perhaps the best thing to do right now is to just list out all the values of that satisfy both congruences.     So, it looks like is a solution.  There is a better way. Instead, we turn the first congruence back into an equation and write for some integer . Then, we substitute this back into the second congruence:     This is now a familiar problem! We know this can be solved, provided exists modulo . Since , an inverse does indeed exists. Here, .  Finally, this gives .  In fact, all solutions to the system are of the form . We'll motivate why this is true in the homework.    The key idea was that we could write one of the congruences as an equation and substitute that equation into the other congruence. This provides us with a linear congruence that we can solve, in theory, using the methods outlined in . We can naturally extend this idea to more moduli.    Suppose:     What is ?    We can use the result of on the first two congruences. The first two congruences imply .  From this, our set of three congruences reduces to a set of two:     Now, we can solve these two new congruences using exactly the same process. Try it! The answer is .    We can further extend this process, naturally, to arbitrarily many moduli. The key assumption is that each pair of moduli, and , satisfy . If this process holds for any pair of moduli, we say that are pairwise coprime .   Sunzi's Theorem   Let be pairwise coprime. Suppose . Then:       Has a solution.  If and are both solutions, then .      In most (Western) mathematical literature, is called the Chinese remainder theorem . I take some issue with this name. Generally in math, we like to celebrate the people that make great discoveries, which is why we have names like the Pythagorean Theorem or Euler's identntiy. However, if the discoverers are not Euro-American, the mathematical community tends to over-generalize and name such discoveries after broad geographic, linguistic, or cultural groups. This theorem was first studied by the Chinese mathematician Sunzi in the mathematical treatise Sunzi Suanjing somewhere between the 3rd and 5th centuries CE.  The proof of relies on the ideas presented in the examples above.     We can start by solving the first two congruences in the same way we did in . This will give us a new congruence modulo .    Solve your new congruence modulo together with the third congruence in the same way we did in .    Repeat this process inductively until you've exhausted all congruences.      "
},
{
  "id": "ex-5-7-sunzi-ex-1",
  "level": "2",
  "url": "sec-5-7-sunzi.html#ex-5-7-sunzi-ex-1",
  "type": "Example",
  "number": "5.7.1",
  "title": "",
  "body": "  Suppose:     What is ?    Perhaps the best thing to do right now is to just list out all the values of that satisfy both congruences.     So, it looks like is a solution.  There is a better way. Instead, we turn the first congruence back into an equation and write for some integer . Then, we substitute this back into the second congruence:     This is now a familiar problem! We know this can be solved, provided exists modulo . Since , an inverse does indeed exists. Here, .  Finally, this gives .  In fact, all solutions to the system are of the form . We'll motivate why this is true in the homework.   "
},
{
  "id": "ex-5-7-sunzi-ex-2",
  "level": "2",
  "url": "sec-5-7-sunzi.html#ex-5-7-sunzi-ex-2",
  "type": "Example",
  "number": "5.7.2",
  "title": "",
  "body": "  Suppose:     What is ?    We can use the result of on the first two congruences. The first two congruences imply .  From this, our set of three congruences reduces to a set of two:     Now, we can solve these two new congruences using exactly the same process. Try it! The answer is .   "
},
{
  "id": "thm-5-7-sunzi",
  "level": "2",
  "url": "sec-5-7-sunzi.html#thm-5-7-sunzi",
  "type": "Theorem",
  "number": "5.7.3",
  "title": "Sunzi’s Theorem.",
  "body": " Sunzi's Theorem   Let be pairwise coprime. Suppose . Then:       Has a solution.  If and are both solutions, then .     "
},
{
  "id": "sec-5-8-group-theory",
  "level": "1",
  "url": "sec-5-8-group-theory.html",
  "type": "Section",
  "number": "5.8",
  "title": "The Group Theoretic Perspective",
  "body": " The Group Theoretic Perspective   The last few sections have focused on the additive properties of modular arithmetic. In the next few sections, we'll discuss the multiplicative properties.    The Integers Modulo as a Set  To make things easier to work with, we define the following set.    Let be the set of integers modulo , equipped with the following definitions of addition ( ) and multiplication ( ):     for any . We read as Z mod Z or say \"the integers modulo .\"  It is common to abbreviate and write .    In , the and on the left side of each equality are the and operators defined in , while the and on the right side of each equality are the and operators defined in .    In , what is ? ?    In , .  In , .    This set allows us to discuss modular arithmetic without use of congruences and the modulo operator.  We found in previous section that lots of interesting structure arises when you examine numbers in that are coprime to the modulus . Motivated by this, we define the following subset of .   The Group of Units Modulo   Let be the set of elements of that are coprime to .  We read this set as Z mod Z star and occasionally write .      Write down the elements of .    By definition, . Since the factors of are and , we know , , and are not elements of . Therefore, we have .      For any prime , .    Since is prime, all positive integers less than are coprime to .    This set, as suggested by the name of , is an example of a mathematical group . Let's take some time to define groups, prove that this is indeed a group, and discuss the consequences.    The Group of Units    A group is a nonempty set equipped with a binary operation , that maps pairs of elements of to an element of , that satisfies:      Closure : For every , .     Associativity : For every , .     Identity : There exists an element such that for any .     Inverse : For every , there exists such that , the identity element in .         The set is a group under multiplication.  That is, , together with the notion of multiplication defined in , is a group as defined by .    We need to prove the four conditions defined in .      Closure : Let . Then, by definition, , meaning that neither nor share any common factors with . It follows that shares no common factors with . It follows from the division algorithm that shares no common factors with , and so .     Associativity : This follows from the associativity of multiplication in .     Identity : For any , , since independent of . Additionally, for any . Hence, the idenitity exists and is equal to .     Inverse : Since every element satisfies , every element in has an inverse by .     Hence, is a group under multiplication.    Perhaps the most important takeaways are that is closed under multiplication and that inverses exist for each element.    Powers of elements of  Let's explore some consequences of the closure of .  Lets work in and consider the powers of all of the elements.   Powers of the elements of                                              There are three interesting results here.    The last row is all ones.  Some columns appear to reach early and cycle.  The columns that don't cycle seem to generate all elements of .    Does this result hold? Consider now :   Powers of the elements of                                                                            The results do hold! You'll explore a bit more about when these results hold and when they don't in the homework, and we'll formalize them over the next two sections.   "
},
{
  "id": "def-5-8-z-mod-m-z",
  "level": "2",
  "url": "sec-5-8-group-theory.html#def-5-8-z-mod-m-z",
  "type": "Definition",
  "number": "5.8.1",
  "title": "",
  "body": "  Let be the set of integers modulo , equipped with the following definitions of addition ( ) and multiplication ( ):     for any . We read as Z mod Z or say \"the integers modulo .\"  It is common to abbreviate and write .   "
},
{
  "id": "ex-5-8-z-mod-m-z",
  "level": "2",
  "url": "sec-5-8-group-theory.html#ex-5-8-z-mod-m-z",
  "type": "Example",
  "number": "5.8.2",
  "title": "",
  "body": "  In , what is ? ?    In , .  In , .   "
},
{
  "id": "def-5-8-group-of-units",
  "level": "2",
  "url": "sec-5-8-group-theory.html#def-5-8-group-of-units",
  "type": "Definition",
  "number": "5.8.3",
  "title": "The Group of Units Modulo <span class=\"process-math\">\\(m\\)<\/span>.",
  "body": " The Group of Units Modulo   Let be the set of elements of that are coprime to .  We read this set as Z mod Z star and occasionally write .   "
},
{
  "id": "ex-5-8-z-mod-m-z-star",
  "level": "2",
  "url": "sec-5-8-group-theory.html#ex-5-8-z-mod-m-z-star",
  "type": "Example",
  "number": "5.8.4",
  "title": "",
  "body": "  Write down the elements of .    By definition, . Since the factors of are and , we know , , and are not elements of . Therefore, we have .   "
},
{
  "id": "thm-5-8-z-mod-p-z",
  "level": "2",
  "url": "sec-5-8-group-theory.html#thm-5-8-z-mod-p-z",
  "type": "Theorem",
  "number": "5.8.5",
  "title": "",
  "body": "  For any prime , .    Since is prime, all positive integers less than are coprime to .   "
},
{
  "id": "def-5-8-group",
  "level": "2",
  "url": "sec-5-8-group-theory.html#def-5-8-group",
  "type": "Definition",
  "number": "5.8.6",
  "title": "",
  "body": "  A group is a nonempty set equipped with a binary operation , that maps pairs of elements of to an element of , that satisfies:      Closure : For every , .     Associativity : For every , .     Identity : There exists an element such that for any .     Inverse : For every , there exists such that , the identity element in .      "
},
{
  "id": "thm-5-8-z-mod-m-z-star-group",
  "level": "2",
  "url": "sec-5-8-group-theory.html#thm-5-8-z-mod-m-z-star-group",
  "type": "Theorem",
  "number": "5.8.7",
  "title": "",
  "body": "  The set is a group under multiplication.  That is, , together with the notion of multiplication defined in , is a group as defined by .    We need to prove the four conditions defined in .      Closure : Let . Then, by definition, , meaning that neither nor share any common factors with . It follows that shares no common factors with . It follows from the division algorithm that shares no common factors with , and so .     Associativity : This follows from the associativity of multiplication in .     Identity : For any , , since independent of . Additionally, for any . Hence, the idenitity exists and is equal to .     Inverse : Since every element satisfies , every element in has an inverse by .     Hence, is a group under multiplication.   "
},
{
  "id": "subsec-powers-4",
  "level": "2",
  "url": "sec-5-8-group-theory.html#subsec-powers-4",
  "type": "Table",
  "number": "5.8.8",
  "title": "Powers of the elements of <span class=\"process-math\">\\(\\left(\\mathbb{Z}\/5\\mathbb{Z}\\right)^\\times\\)<\/span>",
  "body": " Powers of the elements of                                             "
},
{
  "id": "subsec-powers-8",
  "level": "2",
  "url": "sec-5-8-group-theory.html#subsec-powers-8",
  "type": "Table",
  "number": "5.8.9",
  "title": "Powers of the elements of <span class=\"process-math\">\\(\\left(\\mathbb{Z}\/7\\mathbb{Z}\\right)^\\times\\)<\/span>",
  "body": " Powers of the elements of                                                                           "
},
{
  "id": "sec-5-9-fermat-little-theorem",
  "level": "1",
  "url": "sec-5-9-fermat-little-theorem.html",
  "type": "Section",
  "number": "5.9",
  "title": "Fermat’s Little Theorem",
  "body": " Fermat's Little Theorem   One of the revelations we had at the end of the last section was that, for prime , it seemed to be the case that:     for any . This result is known as Fermat's Little Theorem . We present the proof of this theorem in this section.  However, I'd recommend you read this section out of order. Too often in formal mathematics education, we start with definitions, then prove lemmas, and finally arrive at big results and prove them. I find that approach to be unsatisfying and actually quite contradictory to how real mathematical discoveries are actually made. Mathematical discoveries are made by making conjectures about interesting new topics after lots of trial and error. Once you feel good about the conjecture you've made, only then do you go back and build the relevant theory.  Motivated by this, I would actually recommend you skip to the main result of this section, , and try to read the proof. Once you reach a step that you don't fully understand, look back at the linked lemma for intuition. This, together with your exploratory analysis about Fermat's Little Theorem in your last homework, more accurately reflects what doing math actually looks like.    Proving Fermat's Little Theorem  The proof of the theorem itself is actually not terribly compicated, but we'll need some additional backgroud theory to make the proof rigorous. To that end, we introduce the following four lemmas. Some of them might feel completely arbitrary. They will pay off, I promise!  The first is a nice review of set theory.    Suppose and are finite sets with and . Then .    The key idea is to write as a disjoint union of two sets. Since , we can write:     Since contains (that is, is a subset of ), we can think of as all of the elements of together with all the rest of the elements of that are not in .  Importantly, these two sets, and are disjoint by construction (that is, ). As such,     But, by assumption, so the left-hand size is zero, and so:     Hence, there are no elements in that are not also in , and so .  Thus, since and , we conclude .    The remaining three lemmas are all about modular arithmetic.    Let be prime. Then is invertible modulo .    Recall from that is invertible mod if and only if . Since is prime, as long as is not a multiple of .  Well, is not a mutiple of , so , and therefore exists.  You can also prove this by converting the statement into to group of units and using . I'd encourage you to think through the proof and try it!    For the next two lemmas, fix an arbitrary and define:       The elements of are all distinct.    Suppose not. That is, suppose that there exists such that . Then, by definition,     Since , is inveritble by . Multiplying both side of our congurence by yields:     The last step follows from the fact that , and so congruence modulo is the same as equality.  Hence, by way of contradiction, we've proved that no two elements of can be equal, and so all elements of are distinct.    One more! The next one tells is that the set that we defined contains all of the same elements as , except possibly in a different order. This is an interesting fact in and of itself, and I'd encourage you to play around with it by picking a prime and an element (say, and ) and showing that all of the muliples of generate all of the elements of . For our purposes, though, it will help us prove Fermat's Little Theorem.     .    Because is a group, it is closed under multiplication (see ). Hence, all of the elements of are elements of , and so .  And, by , all of the elements of are distinct, which means .  So, by , since and , we conclude     And now we finally have everything we need to prove Fermat's Little Theorem!    Let be prime. Then for every .  Let be the set of all multiples of modulo . Then, by , . If two sets are equal, then the products of their elements is equal, and so:     By , has an inverse, , modulo . Multiplying both side of the above congruence by that inverse yields:     which completes the proof.     "
},
{
  "id": "lem-5-8-subsets-with-same-cardinality",
  "level": "2",
  "url": "sec-5-9-fermat-little-theorem.html#lem-5-8-subsets-with-same-cardinality",
  "type": "Lemma",
  "number": "5.9.1",
  "title": "",
  "body": "  Suppose and are finite sets with and . Then .    The key idea is to write as a disjoint union of two sets. Since , we can write:     Since contains (that is, is a subset of ), we can think of as all of the elements of together with all the rest of the elements of that are not in .  Importantly, these two sets, and are disjoint by construction (that is, ). As such,     But, by assumption, so the left-hand size is zero, and so:     Hence, there are no elements in that are not also in , and so .  Thus, since and , we conclude .   "
},
{
  "id": "lem-5-9-p-less-1-fact",
  "level": "2",
  "url": "sec-5-9-fermat-little-theorem.html#lem-5-9-p-less-1-fact",
  "type": "Lemma",
  "number": "5.9.2",
  "title": "",
  "body": "  Let be prime. Then is invertible modulo .    Recall from that is invertible mod if and only if . Since is prime, as long as is not a multiple of .  Well, is not a mutiple of , so , and therefore exists.  You can also prove this by converting the statement into to group of units and using . I'd encourage you to think through the proof and try it!   "
},
{
  "id": "lem-5-9-elements-distinct",
  "level": "2",
  "url": "sec-5-9-fermat-little-theorem.html#lem-5-9-elements-distinct",
  "type": "Lemma",
  "number": "5.9.3",
  "title": "",
  "body": "  The elements of are all distinct.    Suppose not. That is, suppose that there exists such that . Then, by definition,     Since , is inveritble by . Multiplying both side of our congurence by yields:     The last step follows from the fact that , and so congruence modulo is the same as equality.  Hence, by way of contradiction, we've proved that no two elements of can be equal, and so all elements of are distinct.   "
},
{
  "id": "lem-5-9-s-is-zmpzs",
  "level": "2",
  "url": "sec-5-9-fermat-little-theorem.html#lem-5-9-s-is-zmpzs",
  "type": "Lemma",
  "number": "5.9.4",
  "title": "",
  "body": "   .    Because is a group, it is closed under multiplication (see ). Hence, all of the elements of are elements of , and so .  And, by , all of the elements of are distinct, which means .  So, by , since and , we conclude    "
},
{
  "id": "thm-5-9-fermat-little-theorem",
  "level": "2",
  "url": "sec-5-9-fermat-little-theorem.html#thm-5-9-fermat-little-theorem",
  "type": "Theorem",
  "number": "5.9.5",
  "title": "",
  "body": "  Let be prime. Then for every .  Let be the set of all multiples of modulo . Then, by , . If two sets are equal, then the products of their elements is equal, and so:     By , has an inverse, , modulo . Multiplying both side of the above congruence by that inverse yields:     which completes the proof.   "
},
{
  "id": "sec-5-10-cryptography",
  "level": "1",
  "url": "sec-5-10-cryptography.html",
  "type": "Section",
  "number": "5.10",
  "title": "Introduction to Cryptography",
  "body": " Introduction to Cryptography   Cryptography is the study of mathematical secret sharing. We often share very sensitive information across the internet, like passwords, data files that contain personally identifiable information, etc. We cannot just send these messages in plain text, because is generally not difficult for a malicious third party to gain access to the information we send through the internet. At the same time, we also want to intended receiver to be able to easily read the information we send. So, we need a process by which we can alter our message so that it is unintelligible to everyone except for our intended audience. We study some ways to do this below.    The Discrete Log Problem  Before we dive into cryptography, we need a little more theory. Recall back to the exercise at the end of , in which we examined powers in . We said that there were three interesting results of our exploration. The third result was that there were some elements for which the powers of appear to generate . Elements that satisfy this property are called primitive roots modulo .    An integer is called a primitive root modulo if the smallest positive exponent for which is .      Let be a primitive root modulo . Then, .    Omitted for brevity, but you can prove this!    We've already seen examples of this at the end of :      Show that and are primitive roots modulo ,  Show that and are primitive roots modulo .      We see from the tables at the end of that the powers of these elements generate all of the elements of and , respectively. Hence, these elements are indeed primitive roots.    Now, suppose is a primitive root modulo . We can define the exponential function  such that . By our conversation above, is a bijection, and so has an inverse!  The inverse is such that is the unique such that . This is known as the discrete logarithm . It turns out, finding given is very hard when is large.   The Discrete Log Problem (DLP)   Let be prime, be a primitive root, and . The discrete log problem is the task of finding the unique such that and .    The reason this construct is useful is that finding from and is hard, but finding from and is easy! In general, cryptography relies on problems that are easy to do in one direction (encryption) and difficult to do in the other direction (decryption).    The Setup  We're ready to talk about cryptography! The theoretical idea is to assume that two parties, Alice and Bob, want to share some information over an insecure channel (e.g., the internet) where an eavesdropper, Eve, might be listening. In general, any of the communication between Alice and Bob is assumed to be known by Eve, so Alice and Bob cannot share any information securely. Keep this in mind as we discuss the following two cryptosystems.    Symmetric Key Encrypton: Diffie Hellman  The first official cryptosystem that we're going to examine is a symmetric key exchange protocol called Diffie Hellman .   Diffie Hellman Key Exchange      Alice and Bob agree on a prime and a primitive root . They assume Eve knows , all of the information shared publicly below, and the algorithm itself.    Alice chooses a secrete integer and computes .    Bob chooses a secrete integer and computes .    Alice sends Bob and Bob sends Alice . Eve intercepts and .    Alice computes , and Bob computes .     Then, , and so Alice and Bob have a shared secret.    Note that . Similarly, . Hence, Alice and Bob have the same number modulo .    Importantly, Eve cannot reasonably determine the secret. She knows , and she knows how and were constructed. Critically, however, she does not know and . So, in order for Eve to decrypt the message, she'll need to solve:     and then compute modulo . But, finding is equivalent to solving the discrete log problem, which is not feasible with current technology and mathematical understanding. So, Alice's and Bob's secret is safe!    Public Key Cryptography: ElGamal  Symmetric key encryption, like Diffie Hellman, is useful if you want to generate a one-time password or something similar, but it is not useful if you want to send a specific message across an insecure channel. TO do this, we'll need public key cryptography, and the example we'll use here is the ElGamal cryptosystem. Another famous example is RSA, which relies on difficulty of factoring two large numbers.  Here, we assume Bob wants to send a message to Alice using Alice's cryptosystem.   The ElGamal Cryptosystem      Alice chooses a large prime , picks a primitive root , and calculates for some integer with .    Alice publishes her public key and keeps her private key a secret. Eve knows .    Bob encrypts a message and chooses a random integer .    Bob computes:       Bob sends to Alice. Eve intercepts .    Alice computes:        Then, , Bob's message.         Again, Eve cannot reasonably determine . She knows , and she knows how and were constructed, but she does not know and . So, in order for Eve to decrypt the message, she'll need to again solve:     for , and then she can solve modulo for . Again, finding is equivalent to solving the discrete log problem, which is not feasible with current technology and mathematical understanding. So, Bob's secret message is safe!   "
},
{
  "id": "def-5-10-prim-roots",
  "level": "2",
  "url": "sec-5-10-cryptography.html#def-5-10-prim-roots",
  "type": "Definition",
  "number": "5.10.1",
  "title": "",
  "body": "  An integer is called a primitive root modulo if the smallest positive exponent for which is .   "
},
{
  "id": "thm-5-10-prim-roots",
  "level": "2",
  "url": "sec-5-10-cryptography.html#thm-5-10-prim-roots",
  "type": "Theorem",
  "number": "5.10.2",
  "title": "",
  "body": "  Let be a primitive root modulo . Then, .    Omitted for brevity, but you can prove this!   "
},
{
  "id": "ex-5-10-prim-roots",
  "level": "2",
  "url": "sec-5-10-cryptography.html#ex-5-10-prim-roots",
  "type": "Example",
  "number": "5.10.3",
  "title": "",
  "body": "    Show that and are primitive roots modulo ,  Show that and are primitive roots modulo .      We see from the tables at the end of that the powers of these elements generate all of the elements of and , respectively. Hence, these elements are indeed primitive roots.   "
},
{
  "id": "def-5-10-dlp",
  "level": "2",
  "url": "sec-5-10-cryptography.html#def-5-10-dlp",
  "type": "Definition",
  "number": "5.10.4",
  "title": "The Discrete Log Problem (DLP).",
  "body": " The Discrete Log Problem (DLP)   Let be prime, be a primitive root, and . The discrete log problem is the task of finding the unique such that and .   "
},
{
  "id": "alg-5-10-diffie-hellman",
  "level": "2",
  "url": "sec-5-10-cryptography.html#alg-5-10-diffie-hellman",
  "type": "Algorithm",
  "number": "5.10.5",
  "title": "Diffie Hellman Key Exchange.",
  "body": " Diffie Hellman Key Exchange      Alice and Bob agree on a prime and a primitive root . They assume Eve knows , all of the information shared publicly below, and the algorithm itself.    Alice chooses a secrete integer and computes .    Bob chooses a secrete integer and computes .    Alice sends Bob and Bob sends Alice . Eve intercepts and .    Alice computes , and Bob computes .     Then, , and so Alice and Bob have a shared secret.    Note that . Similarly, . Hence, Alice and Bob have the same number modulo .   "
},
{
  "id": "alg-5-10-elgamal",
  "level": "2",
  "url": "sec-5-10-cryptography.html#alg-5-10-elgamal",
  "type": "Algorithm",
  "number": "5.10.6",
  "title": "The ElGamal Cryptosystem.",
  "body": " The ElGamal Cryptosystem      Alice chooses a large prime , picks a primitive root , and calculates for some integer with .    Alice publishes her public key and keeps her private key a secret. Eve knows .    Bob encrypts a message and chooses a random integer .    Bob computes:       Bob sends to Alice. Eve intercepts .    Alice computes:        Then, , Bob's message.        "
},
{
  "id": "sec-5-11-exercises",
  "level": "1",
  "url": "sec-5-11-exercises.html",
  "type": "Section",
  "number": "5.11",
  "title": "Exercises",
  "body": " Exercises  Please complete the following problems. Show your work and simplify your answers whenever possible.    Using the extended Euclidean algorithm, find the inverse of modulo . Show your work.      Solve the linear congruence . Is the solution unique in ? Why or why not?      Solve the linear congruence .   Hint: What is ?       Solve the system of congruences:   Before doing any computations, how do you know a solution exists?      In this problem, we are going to prove Wilson's Theorem , which aims to understand the value of modulo . Recall, . Equivalently, is the product of all of the elements of      Compute in and in . What do you notice?    To prove your conjecture, we need to understand how elements interact with their multiplicative inverses when multiplied together in a large chain.  List all of the elements in and pair up each element with its unique multiplicative inverse. Which elements are paired up with different numbers? Which elements are paired with themselves ?    Here, we examine the numbers which are their own inverses. An element is its own inverse if and only if .   Rewrite the above congruence as and factor the left side.    Use Euclid's Lemma (if a prime divides a product, it must divide at least one of the factors) to prove that the only elements in that are their own inverses are and (i.e., and ).       We're ready for the proof. Write .   Based on your findings above, explain what happens to the numbers through ?    Conclude that .            We'll conclude this assignment with a study of square roots modulo for some prime (adapted from Exercises 1.36 and 1.39 in Hoffstein, Piper, and Silverman's Introduction to Mathematical Cryptography ). We will see that the behaviour is similar to that of , where every number has either 2 square roots, or none at all.     Let p be prime, and suppose , and . Show that either has 2 square roots modulo , or none. That is, show that the congruence: has either 2 or 0 solutions in . What happens if ?   Hint: Think about solutions to the equation and reduce modulo .     Test that this works by finding all solutions to the following two congruences:     Much like the integers, if a number has a square root modulo , we call it a perfect square modulo . Find all the perfect squares in and .    Notice that in each case exactly half of the nonzero elements were perfect squares (suggesting that perfect squares are more common mod than in ). Let's prove this in general.  Let be an odd prime and be a primitive root. Then any is congruent to a power of modulo , say mod . Show that is a perfect square if and only if is even. Conclude that exactly half of the nonzero elements of are perfect squares.    With these tools in hand we can prove the following variant of Fermat's little theorem.  For a few (small) primes , compute mod for various nonzero values of . You should notice a pattern, make a conjecture as to the possible values of for , and prove it is correct. (Hint: Use Fermat's little theorem and part 1 above.)       "
},
{
  "id": "ch-5-1-euclid",
  "level": "2",
  "url": "sec-5-11-exercises.html#ch-5-1-euclid",
  "type": "Exercise",
  "number": "5.11.1",
  "title": "",
  "body": "  Using the extended Euclidean algorithm, find the inverse of modulo . Show your work.   "
},
{
  "id": "ch-5-2-simple-congruence",
  "level": "2",
  "url": "sec-5-11-exercises.html#ch-5-2-simple-congruence",
  "type": "Exercise",
  "number": "5.11.2",
  "title": "",
  "body": "  Solve the linear congruence . Is the solution unique in ? Why or why not?   "
},
{
  "id": "ch-5-3-complex-congruence",
  "level": "2",
  "url": "sec-5-11-exercises.html#ch-5-3-complex-congruence",
  "type": "Exercise",
  "number": "5.11.3",
  "title": "",
  "body": "  Solve the linear congruence .   Hint: What is ?    "
},
{
  "id": "ch-5-4-sunzi",
  "level": "2",
  "url": "sec-5-11-exercises.html#ch-5-4-sunzi",
  "type": "Exercise",
  "number": "5.11.4",
  "title": "",
  "body": "  Solve the system of congruences:   Before doing any computations, how do you know a solution exists?   "
},
{
  "id": "ch-5-5-wilson",
  "level": "2",
  "url": "sec-5-11-exercises.html#ch-5-5-wilson",
  "type": "Exercise",
  "number": "5.11.5",
  "title": "",
  "body": "  In this problem, we are going to prove Wilson's Theorem , which aims to understand the value of modulo . Recall, . Equivalently, is the product of all of the elements of      Compute in and in . What do you notice?    To prove your conjecture, we need to understand how elements interact with their multiplicative inverses when multiplied together in a large chain.  List all of the elements in and pair up each element with its unique multiplicative inverse. Which elements are paired up with different numbers? Which elements are paired with themselves ?    Here, we examine the numbers which are their own inverses. An element is its own inverse if and only if .   Rewrite the above congruence as and factor the left side.    Use Euclid's Lemma (if a prime divides a product, it must divide at least one of the factors) to prove that the only elements in that are their own inverses are and (i.e., and ).       We're ready for the proof. Write .   Based on your findings above, explain what happens to the numbers through ?    Conclude that .         "
},
{
  "id": "ch-5-6-square-roots",
  "level": "2",
  "url": "sec-5-11-exercises.html#ch-5-6-square-roots",
  "type": "Exercise",
  "number": "5.11.6",
  "title": "",
  "body": "  We'll conclude this assignment with a study of square roots modulo for some prime (adapted from Exercises 1.36 and 1.39 in Hoffstein, Piper, and Silverman's Introduction to Mathematical Cryptography ). We will see that the behaviour is similar to that of , where every number has either 2 square roots, or none at all.     Let p be prime, and suppose , and . Show that either has 2 square roots modulo , or none. That is, show that the congruence: has either 2 or 0 solutions in . What happens if ?   Hint: Think about solutions to the equation and reduce modulo .     Test that this works by finding all solutions to the following two congruences:     Much like the integers, if a number has a square root modulo , we call it a perfect square modulo . Find all the perfect squares in and .    Notice that in each case exactly half of the nonzero elements were perfect squares (suggesting that perfect squares are more common mod than in ). Let's prove this in general.  Let be an odd prime and be a primitive root. Then any is congruent to a power of modulo , say mod . Show that is a perfect square if and only if is even. Conclude that exactly half of the nonzero elements of are perfect squares.    With these tools in hand we can prove the following variant of Fermat's little theorem.  For a few (small) primes , compute mod for various nonzero values of . You should notice a pattern, make a conjecture as to the possible values of for , and prove it is correct. (Hint: Use Fermat's little theorem and part 1 above.)      "
},
{
  "id": "sec-6-1-counting",
  "level": "1",
  "url": "sec-6-1-counting.html",
  "type": "Section",
  "number": "6.1",
  "title": "Basic Counting",
  "body": " Basic Counting  Suppose that there are 10 Mathematics students and 15 Data Science students in a class, and we have a need to select one of the Mathematics students and one of the Data Science students (say, for a committee, or for a fight over which discipline is superior). How many ways can we do this?  Suppose we decide to form the committee by first selecting the Mathematics representative and then selecting the Data Science representitve. Then, we have 10 choices for the Mathematics representative, and for each choice of Math rep, we have 15 choices for a Data Science rep. So, naturally, we seem to have possible choices of committee.  If, instead, we needed to choose a student from Mathematics or Data Science, then there are possible choices.  The former logic (in which we needed to select one representative from each group) led us to multiplication, while the latter logic (in which we needed to select a representative from any group) led us to addition. We formalize these ideas into the following rules.   The Multiplication Rule   Suppose there is a sequence of events, such that:   There are outcomes associated with event ;    The number of ways an event in a sequence can occur does not depend on how the previous events in that sequence occurred.     Then, there are ways in which all of the events in the sequence can occur.     The Addition Rule   Suppose there is a sequence of events, such that:   There are outcomes associated with event ;    No two events can occur simultaneously.     Then, there are ways in which one of the events in the sequence can occur.    A surprising amount of combinatorics can be generated from these two ideas.    In 2026, California adopted a new license plate convention. Now, license plates start with three numbers, followed by three letters, and conclude with another number. Assuming that letters and numebers are allowed to repeat, how many distinct license plates are possible under California's new system?    There are 7 alphanumeric events in a sequence, and each event is independent from the events preceeding it (e.g., the second number does not depend on the first). So, by , there are: distinct license plates.      How many odd numbers are there between 1 and 99? (Pretend that this question isn't obvious).    The numbers through comprise all of the two-digit numbers, if we agree to write as . Then, we can count the number of odd numbers by examining each digit separately. For a generic odd number, there are five ways to choose a units digit and, independent of the units digit, 10 ways to choose a tens digit. Thus, there are ways to select an odd number between and , inclusive.      Let be a set with elements. Find the cardinality of the power set of , .  Recall that is the set of all subsets of .    To specify a given element of , we need to decide whether each element of is included in .  Suppose . Let denote the event that . Then, for each , there are two outcomes for (either or ), and so . So, by there are: ways to select , and so .    In the next two sections, we are going to examine what it looks like to select elements from a set of under certain conditions.   If the order of selection matters, we call this selection a permutation .    If the order of selection does not matter, we call this selection a combination .     "
},
{
  "id": "thm-6-1-mult-rule",
  "level": "2",
  "url": "sec-6-1-counting.html#thm-6-1-mult-rule",
  "type": "Theorem",
  "number": "6.1.1",
  "title": "The Multiplication Rule.",
  "body": " The Multiplication Rule   Suppose there is a sequence of events, such that:   There are outcomes associated with event ;    The number of ways an event in a sequence can occur does not depend on how the previous events in that sequence occurred.     Then, there are ways in which all of the events in the sequence can occur.   "
},
{
  "id": "thm-6-1-add-rule",
  "level": "2",
  "url": "sec-6-1-counting.html#thm-6-1-add-rule",
  "type": "Theorem",
  "number": "6.1.2",
  "title": "The Addition Rule.",
  "body": " The Addition Rule   Suppose there is a sequence of events, such that:   There are outcomes associated with event ;    No two events can occur simultaneously.     Then, there are ways in which one of the events in the sequence can occur.   "
},
{
  "id": "ex-6-1-license-plates",
  "level": "2",
  "url": "sec-6-1-counting.html#ex-6-1-license-plates",
  "type": "Example",
  "number": "6.1.3",
  "title": "",
  "body": "  In 2026, California adopted a new license plate convention. Now, license plates start with three numbers, followed by three letters, and conclude with another number. Assuming that letters and numebers are allowed to repeat, how many distinct license plates are possible under California's new system?    There are 7 alphanumeric events in a sequence, and each event is independent from the events preceeding it (e.g., the second number does not depend on the first). So, by , there are: distinct license plates.   "
},
{
  "id": "ex-6-1-counting-odd-numbers",
  "level": "2",
  "url": "sec-6-1-counting.html#ex-6-1-counting-odd-numbers",
  "type": "Example",
  "number": "6.1.4",
  "title": "",
  "body": "  How many odd numbers are there between 1 and 99? (Pretend that this question isn't obvious).    The numbers through comprise all of the two-digit numbers, if we agree to write as . Then, we can count the number of odd numbers by examining each digit separately. For a generic odd number, there are five ways to choose a units digit and, independent of the units digit, 10 ways to choose a tens digit. Thus, there are ways to select an odd number between and , inclusive.   "
},
{
  "id": "ex-6-1-power-set",
  "level": "2",
  "url": "sec-6-1-counting.html#ex-6-1-power-set",
  "type": "Example",
  "number": "6.1.5",
  "title": "",
  "body": "  Let be a set with elements. Find the cardinality of the power set of , .  Recall that is the set of all subsets of .    To specify a given element of , we need to decide whether each element of is included in .  Suppose . Let denote the event that . Then, for each , there are two outcomes for (either or ), and so . So, by there are: ways to select , and so .   "
},
{
  "id": "sec-6-2-permutations",
  "level": "1",
  "url": "sec-6-2-permutations.html",
  "type": "Section",
  "number": "6.2",
  "title": "Permutations",
  "body": " Permutations  In the last section, we considered an example in which we were interested in selecting two students for a committee. Let's make this slightly more complicated. Suppose, in a class of 15 students, we need to nominate candidates for a committee in which one of those people will serve as the president, one will serve as the vice president, one will serve as the secretary, and one will serve as a treasurer.  In our previous example, the order in which we selected students did not matter, but here it does. Only one of the four nominated students will act as president, only one will act as vice president, and so on.  The question, then, is how many ways are there to elect such a body? To answer this question, suppose we agree to first elect the president, then elect the vice president, then elect the secretary, and finally elect the treasurer.     If there are 15 students in the room, then there are 15 ways to elect a president.    Once we elect a president, that candidate has left the pool of potential candidates. As such, there are now only 14 ways to elect a vice president.    Once the president and vice president have been elected, that leaves 13 ways to elect a secretary.    Finally, after the three other positions have been filled, there are only 12 ways to elect the fourth.     Naturally, then, there seems to be: ways to elect a committee of four people in which the order of election matters.  So, how does this look in general? Suppose we want to select an ordered list of objects from a set of . How many ways can we do this? We follow the same logic!     If there are objects initally, then there are ways to selet the first one.    Once we select the first element, it is no longer a part of our list. As such, there are only ways to select the second.    After we select the first two objects, there are only objects from which we can choose the third.     If we repeat this logic to its conclusion, once we select the first objects, there are only ways to select the 'th objection. As such, there are: to select an ordered set of objects from a set of . We can rewrite this elegantly using factorials: This expression is counts the number of -permutations of a set of objects.    Let and be nonnegative integers with and suppose we have a set of distinct objects. An -permutation is an ordered -element subset of the objects. There are: many such -permutations.      How many ways are there to arrange distinct elements?    In the case where , we have: But, this counts the number of ways to order the entire list. As such, we conclude that there are many ways to arrange the distinct objects in an element list.  An -permutation of an element set is simply called a permutation .      Assuming that any string of letters constitutes a word in some sense, how many distinct -letter words are there?    There are distinct letters in the alphabet, and we are interested in selecting a letter subset of them. According to , there are: many such words.  There's probably a Wordle joke in here somewhere.      In how many different ways can the word STRANGE be rearranged?    720.      In how many different ways can the word CONSENSUS be rearranged?    This one is a bit more complicated, because the letters are not all distinct, and so the permutation rule, , does not apply. There are several ways you can think about how to do this, but here's the one I like.  First, place subscripts on all of the letters that repeat, so that the word beccomes .  Now, all of the letters are distinct, so we can apply . In this case, there are letters in this word, there are ways to permute the distinct letters.  However, the letters weren't actually distinct. There are two copies of N and three of S . Since there are permutations of the N 's and permutations of the S 's, we've overcounted by those factors. As such, there are really only ways to arrange the letters in CONSENSUS .      In how many different ways can the word MATHEMATICS be rearranged?         We can combine the idea behind with the multiplication rule, to solve even more complicated problems.    Suppose that, for your degree, you need to take math classes, computer science classes, and statistics classes. Suppose for the sake of simplicity that you can take any class in any order (i.e., there are no prerequisites). How many different schedules are there such that the classes from a given discipline are contiguous?    We break this problem into steps, where we first examine the possible orderings of the disciplines (e.g., computer science, then math, then stats, vs math, then stats, then computer science), and then we examine the possible ordering of classes within each discipline.  There are orderings of the disciplines. Within each order, there are possible orderings of math classes, possible orderings of computer science classes, and possible orderings of statistics classes.  Notice:   the ordering of the disciplines did not affect the ordering of the math classes;    the ordering of the math classes did not affect the ordering of the computer science classes;    the ordering of the computer science classes did not affect the ordering of the statistics classes.   So, we can apply . In total, there are: possible schedule orderings.    "
},
{
  "id": "def-6-2-permutation",
  "level": "2",
  "url": "sec-6-2-permutations.html#def-6-2-permutation",
  "type": "Definition",
  "number": "6.2.1",
  "title": "",
  "body": "  Let and be nonnegative integers with and suppose we have a set of distinct objects. An -permutation is an ordered -element subset of the objects. There are: many such -permutations.   "
},
{
  "id": "ex-6-2-permutation",
  "level": "2",
  "url": "sec-6-2-permutations.html#ex-6-2-permutation",
  "type": "Example",
  "number": "6.2.2",
  "title": "",
  "body": "  How many ways are there to arrange distinct elements?    In the case where , we have: But, this counts the number of ways to order the entire list. As such, we conclude that there are many ways to arrange the distinct objects in an element list.  An -permutation of an element set is simply called a permutation .   "
},
{
  "id": "ex-6-2-words",
  "level": "2",
  "url": "sec-6-2-permutations.html#ex-6-2-words",
  "type": "Example",
  "number": "6.2.3",
  "title": "",
  "body": "  Assuming that any string of letters constitutes a word in some sense, how many distinct -letter words are there?    There are distinct letters in the alphabet, and we are interested in selecting a letter subset of them. According to , there are: many such words.  There's probably a Wordle joke in here somewhere.   "
},
{
  "id": "ex-6-2-strange",
  "level": "2",
  "url": "sec-6-2-permutations.html#ex-6-2-strange",
  "type": "Exercise",
  "number": "6.2.4",
  "title": "",
  "body": "  In how many different ways can the word STRANGE be rearranged?    720.   "
},
{
  "id": "ex-6-2-consensus",
  "level": "2",
  "url": "sec-6-2-permutations.html#ex-6-2-consensus",
  "type": "Example",
  "number": "6.2.5",
  "title": "",
  "body": "  In how many different ways can the word CONSENSUS be rearranged?    This one is a bit more complicated, because the letters are not all distinct, and so the permutation rule, , does not apply. There are several ways you can think about how to do this, but here's the one I like.  First, place subscripts on all of the letters that repeat, so that the word beccomes .  Now, all of the letters are distinct, so we can apply . In this case, there are letters in this word, there are ways to permute the distinct letters.  However, the letters weren't actually distinct. There are two copies of N and three of S . Since there are permutations of the N 's and permutations of the S 's, we've overcounted by those factors. As such, there are really only ways to arrange the letters in CONSENSUS .   "
},
{
  "id": "ex-6-2-mathematics",
  "level": "2",
  "url": "sec-6-2-permutations.html#ex-6-2-mathematics",
  "type": "Exercise",
  "number": "6.2.6",
  "title": "",
  "body": "  In how many different ways can the word MATHEMATICS be rearranged?        "
},
{
  "id": "ex-6-2-complicated",
  "level": "2",
  "url": "sec-6-2-permutations.html#ex-6-2-complicated",
  "type": "Example",
  "number": "6.2.7",
  "title": "",
  "body": "  Suppose that, for your degree, you need to take math classes, computer science classes, and statistics classes. Suppose for the sake of simplicity that you can take any class in any order (i.e., there are no prerequisites). How many different schedules are there such that the classes from a given discipline are contiguous?    We break this problem into steps, where we first examine the possible orderings of the disciplines (e.g., computer science, then math, then stats, vs math, then stats, then computer science), and then we examine the possible ordering of classes within each discipline.  There are orderings of the disciplines. Within each order, there are possible orderings of math classes, possible orderings of computer science classes, and possible orderings of statistics classes.  Notice:   the ordering of the disciplines did not affect the ordering of the math classes;    the ordering of the math classes did not affect the ordering of the computer science classes;    the ordering of the computer science classes did not affect the ordering of the statistics classes.   So, we can apply . In total, there are: possible schedule orderings.   "
},
{
  "id": "sec-6-3-combinations",
  "level": "1",
  "url": "sec-6-3-combinations.html",
  "type": "Section",
  "number": "6.3",
  "title": "Combinations",
  "body": " Combinations  Combinations are very similar to permutations, except that in this case, order does not matter. For example, suppose, in a class of 15 students, we need to nominate 5 distinct students to give a presentation of graph theory. In this case, the order of the students chosen does not matter, since we are not prescribing a structure (like a presenter, a writer, etc).  So how many different ways are there to select such a combination? We can begin using the same logic as we used for permutations, in which we have ways to select the first presenter, then ways to select the second , and so on. This would give us  permutations . But, making selections in this manner has imposed an implicit ordering, in which the first person selected was the first , etc. We want to ignore ordering. Since there are students in our collection, we need to divide out the ways in which we've overcounted. This leaves us with such combinations .  We can generalize this argument in the same way we did with permutations to arrive at the following notion of a combination.    Let and be nonnegative integers with and suppose we have a set of distinct objects. An -combination is an unordered -element subset of the objects. There are: many such -combinations.    This notion of unordered subcollections is so commoon in math that we give it special notation.    Let and be nonnegative integers with . The binomial coefficient  is the number of ways to choose unordered items from a set of distinct total items: We read as choose .     The binomial coefficient is exactly the same thing as the number of -combinations , but the former notation is significantly more common, so we'll adopt it from here on.  You might be wondering why we call this a binomial coefficient if it evidently has nothing to do with binomials. Hold on to this question; we'll answer it when we talk about Pascal's triangle.    Let be a set with elements. Find the cardinality of the power set of , .  Recall that is the set of all subsets of .    You may recognize this question. It's identical to . We're revisitng this question here because it has a natural solutoin in terms of binomial coefficients.  Recall that counts the number of ways to choose unordered items from a set of distinct total items. Said another way, counts the number of element subsets of a set of size .  One way, then, to count the total number of subsets of a set of size is to count all the subsets of size – which is – then all of the subsets of size – which is – then all of the subsets of size – which is – and so on until you reach the subsets of size – which is . So,     From that . We also know from that . Therefore, it must be the case that: And indeed it is! We'll see another proof of this in our section on Pascal's Triangle, but that proof does not invalidate this one. What we have just done is prove an identity by finding two different ways to count the same thing. This is an example of a combinatorial proof and is a powerful proof technique. We will see much more of this in the coming sections.   More coming soon...   "
},
{
  "id": "def-6-3-combination",
  "level": "2",
  "url": "sec-6-3-combinations.html#def-6-3-combination",
  "type": "Definition",
  "number": "6.3.1",
  "title": "",
  "body": "  Let and be nonnegative integers with and suppose we have a set of distinct objects. An -combination is an unordered -element subset of the objects. There are: many such -combinations.   "
},
{
  "id": "def-6-3-choose",
  "level": "2",
  "url": "sec-6-3-combinations.html#def-6-3-choose",
  "type": "Definition",
  "number": "6.3.2",
  "title": "",
  "body": "  Let and be nonnegative integers with . The binomial coefficient  is the number of ways to choose unordered items from a set of distinct total items: We read as choose .    "
},
{
  "id": "ex-6-3-power-set",
  "level": "2",
  "url": "sec-6-3-combinations.html#ex-6-3-power-set",
  "type": "Example",
  "number": "6.3.3",
  "title": "",
  "body": "  Let be a set with elements. Find the cardinality of the power set of , .  Recall that is the set of all subsets of .    You may recognize this question. It's identical to . We're revisitng this question here because it has a natural solutoin in terms of binomial coefficients.  Recall that counts the number of ways to choose unordered items from a set of distinct total items. Said another way, counts the number of element subsets of a set of size .  One way, then, to count the total number of subsets of a set of size is to count all the subsets of size – which is – then all of the subsets of size – which is – then all of the subsets of size – which is – and so on until you reach the subsets of size – which is . So,    "
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
