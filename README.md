# Build A Website with ChatGPT (GPT-4)

We all thrilled by the rapid growth of AI (ChatGPT) recently that someone even said "the best programming language will be English". But how close we are from that? I did an experiment today:

I ask the ChatGPT (GPT-4) to build a website by giving me executable shell commands, then we work together and successfully built an website of Steve Jobs' bio.

I gave ChatGPT instructions in natural language and it returns me the shell commands back, then I execute them in terminal, (nearly) without do any coding by myself. Finally we got the files in this repo - Nearly all files are generated and edited by ChatGPT (except this readme file).

**The whole process is AMAZING!** ChatGPT can almost understand every instruction I gave it (at least in the beginning). But it do have a lot to improve:

1. **The Latest Acknowledgement:** when using `react-router-dom`, it installed the latest version (which is v6) but when coding, it still use the grammar of the previous version (v5). This could be solve in future by implementing the plug-in to let it get the latest information about packages and search for the latest API documents. (But the efficiency is doubted because these API docs should be counted into the tokens' usage)
2. **Memory Accuracy:** as we keep moving forward, ChatGPT seems cannot realize what the contents in the files accurately are. So in the late parts, when I ask it to edit some files generated long time ago, it tries to replace the contents with the new one but failed because the replacee failed to match. When this happens, all what I can do is to let it rewrite the hole file.
3. **Codes Completeness:** forget to close the HTML tags. For example, when wrapping the page content with `Layout` component, it only added `<Layout>` without `</Layout>`. I can only manually correct it because the ChatGPT seems cannot realize the issue itself so the communication is really hard and time wasting in this case.

_You can find the issues we met during the journey in the "Out Story" page. The page is also written by ChatGPT and the story is summarized by it, too._

## Conclusion

Currently, using ChatGPT to achieve some specific features for who has absolutely no coding experience is still unrealistic. Because the codes ChatGPT give you can be really buggy and need your technical suggestions to fix.

Maybe in future, we can install a plug-in to enable ChatGPT from collecting and fixing errors, then we maybe closer to our destination.

But now I have no access to the plug-in - event the GPT-4 model's quota is still limited, I have to split my experiments into 3 chunks across 9 hours. So I'll stop the experiment here, and follow any exciting news of AI from my next weak up.

Keep learning, open to changes, explore boundaries.

Best wishes to you all.
