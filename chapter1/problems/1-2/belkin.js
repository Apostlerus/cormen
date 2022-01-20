//а
/**
 * Время каждого куска размером n/k будет O((n/k)^2)
 * Время k кусков будет O((n/k)^2 * k) = O((n^2 / k^2) * k) = O(n^2*k)
 * В нотации это всё равно что O(n^2), вроде как, но теорема не доказана)
 *
 * Но от перемены мест множителей ничего не меняется:
 * Вот для длины k сложность была бы O(k^2), тогда для n/k кусков сложность будет
 * O(k^2 * n/k) = O(kn)
 *
 * :/
 * В следующих абзацах автор отталкивается от второго варианта, но кажется что
 * можно было провести вычисление и через первый...
 */

//б
/**
 * Нужно опять представить разбиение как в прошлом примере - на n/k кусков
 * длины k.
 * Глубина дерева будет равна максимальному количеству разбиений пополам,
 * то есть log(n/k).
 * Т.к. каждая пара мерджится за O(n), общее время будет O(Nlog(n/k)).
 */

//в
/**
 * O(NK + Nlog(N/K)) = O(NK + NlogN - NlogK)
 * Можем опустить NlogN и NlogK, т.к. асимптотическая сложность одинакова.
 * Выходит что O(nk) должно быть меньше чем O(NlogN)
 * То есть k должно быть меньше logN
 */

//г
/**
 * нууу собственно в предыдущих задачах что-то такое делал,
 * просто нужно подобрать в уме k, чтобы удовлетворяло предыдущему пункту
 */